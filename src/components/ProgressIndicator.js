import React from "react";

// * IMPORT STYLED COMPONENTS
import { ProgressBarContainer, ProgressBar } from "../style";

// Create an array of 92 elements to mimic the progress through the match
const progress = Array.from(Array(92).keys());

function ProgressIndicator({ currentMinute }) {
  // Render the elements for the progress bar
  const bars = progress.map((d, i) => {
    return (
      <ProgressBar
        key={i}
        className="progress-bar"
        d={d}
        currentMinute={currentMinute}
      >
        {d === 45 ? "HT" : d === 91 ? "FT" : ""}
      </ProgressBar>
    );
  });

  return <ProgressBarContainer>{bars}</ProgressBarContainer>;
}

export default ProgressIndicator;
