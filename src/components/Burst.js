import React, { useEffect } from "react";

// * IMPORT STYLED COMPONENTS
import { BurstContainer, BurstImageContainer } from "../style";

function Burst({
  visibleBurstImageIndex,
  setVisibleBurstImageIndex,
  burstImages,
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (visibleBurstImageIndex < burstImages.length - 1) {
        setVisibleBurstImageIndex((prevState) => prevState + 1);
      }
    }, 1000);

    return () => clearInterval(timeout);
  }, [visibleBurstImageIndex]);

  // For each item in the image array, create a div with the corresponding background image
  const imageDivs = burstImages.map((img, i) => {
    return (
      <BurstImageContainer
        key={i}
        index={i}
        image={img}
        visibleBurstImageIndex={visibleBurstImageIndex}
      />
    );
  });

  return <BurstContainer>{imageDivs}</BurstContainer>;
}

export default Burst;
