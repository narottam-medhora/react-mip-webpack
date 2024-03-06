import React, { useState } from "react";

// * IMPORT STYLED COMPONENTS
import { ScrollerSection, StickyContainer, BurstButton } from "../style";

// * IMPORT COMPONENTS
import { Scrollama, Step } from "react-scrollama";
import BackgroundImages from "./BackgroundImages";
import ProgressIndicator from "./ProgressIndicator";

// * IMPORT DATA
import data from "../data/data.json";
import Burst from "./Burst";

function Scroller() {
  // Use state to track the minutes for the progress bar
  const [currentMinute, setCurrentMinute] = useState(null);

  // Use state to track which step is currently visible
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Use state to track the visibility of the burst button and burst slides
  const [isBurstButtonVisible, setIsBurstButtonVisible] = useState(false);
  const [isBurstVisible, setIsBurstVisible] = useState(false);

  // Store the array of images for the burst container
  const [burstImages, setBurstImages] = useState([]);

  // Store the index of the first burst image to be displayed
  const [visibleBurstImageIndex, setVisibleBurstImageIndex] = useState(0);

  console.log(visibleBurstImageIndex);

  function onStepEnter(obj) {
    setCurrentStepIndex(obj.data.id);
    setCurrentMinute(obj.data.minute);

    // If the step contains a burst, set the array of images for that specific burst
    if (obj.data.burst) {
      setBurstImages(obj.data.burstImages);
    }
  }

  function onStepProgress(obj) {
    // If the step contains a burst, set the visibility of the burst button to true
    if (obj.data.burst && obj.progress > 0.85) {
      setIsBurstButtonVisible(true);
    } else {
      setIsBurstButtonVisible(false);
      setIsBurstVisible(false);
    }
  }

  function runBurst() {
    // Reset to the first image of the slideshow
    setVisibleBurstImageIndex(0);

    // Set the visibility of the
    setIsBurstVisible(true);
  }

  return (
    <ScrollerSection>
      <StickyContainer>
        <BurstButton
          onClick={runBurst}
          isBurstButtonVisible={isBurstButtonVisible}
        >
          Show Burst
        </BurstButton>
        {isBurstVisible && (
          <Burst
            burstImages={burstImages}
            visibleBurstImageIndex={visibleBurstImageIndex}
            setVisibleBurstImageIndex={setVisibleBurstImageIndex}
          />
        )}
        <ProgressIndicator currentMinute={currentMinute} />
        {!isBurstVisible && (
          <BackgroundImages data={data} currentStepIndex={currentStepIndex} />
        )}
      </StickyContainer>
      <Scrollama
        offset={0.8}
        onStepEnter={onStepEnter}
        onStepProgress={onStepProgress}
        debug
      >
        {data.map((d, stepIndex) => {
          return (
            <Step data={d} key={stepIndex}>
              <div
                style={{
                  position: "relative",
                  width: "75%",
                  marginBlock: d.id === 0 ? "auto" : "50svh",
                  marginInline: "auto",
                  padding: "1em",
                  outline: "0.2px solid gold",
                  height: "max-content",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "0.5em",
                  opacity: currentStepIndex === stepIndex ? 1 : 0,
                  transition: "opacity 0.2s ease-in",
                  zIndex: 99,
                }}
              >
                <h2 className="step-header">{d.heading}</h2>
                <p className="step-text">{d.text}</p>
              </div>
            </Step>
          );
        })}
      </Scrollama>
    </ScrollerSection>
  );
}

export default Scroller;
