import React from "react";

// * IMPORT STYLED COMPONENTS
import { BackgroundImage, BackgroundImagesContainer } from "../style";

function BackgroundImages({ data, currentStepIndex }) {
  // Render a series of background images with an increasing z-index
  const backgroundImages = data.map((d, i) => {
    return (
      <BackgroundImage
        key={i}
        currentStepIndex={currentStepIndex}
        image={d.image}
        index={i}
      />
    );
  });

  return (
    <BackgroundImagesContainer>{backgroundImages}</BackgroundImagesContainer>
  );
}

export default BackgroundImages;
