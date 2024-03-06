import React from "react";

// * IMPORT STYLED COMPONENTS
import { GlobalStyle } from "./style";

// * IMPORT COMPONENTS
import Hero from "./components/Hero";
import Scroller from "./components/Scroller";

function App() {
  // Generate an array of coordinates between random numbers to mimic a touch map
  const halftimeTouchCoordinates = Array.from(Array(30).keys()).map((d) => {
    return {
      id: d,
      x: Math.floor(Math.random() * 90) + 1,
      y: Math.floor(Math.random() * 70 + 1),
    };
  });

  const fulltimeTouchCoordinates = Array.from(Array(60).keys()).map((d) => {
    return {
      id: d,
      x: Math.floor(Math.random() * 90 + 1),
      y: Math.floor(Math.random() * 70 + 1),
    };
  });

  return (
    <>
      <GlobalStyle />
      <Hero />
      <Scroller />
    </>
  );
}

export default App;
