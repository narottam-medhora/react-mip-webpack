import React from "react";

// * IMPORT STYLED COMPONENTS
import { HeroContainer } from "../style";

// * IMPORT COMPONENTS
import AnimatedIcon from "./AnimatedIcon";

function Hero() {
  return (
    <HeroContainer
      className="hero-section"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <a id="hero-masthead" href="https://www.thetimes.co.uk">
        <img src="/times-masthead.png" />
      </a>
      <div className="hero-text">
        <h1 id="hero-header">
          <span id="hero-firstname">Jack</span>
          <span id="hero-lastname">Grealish</span>
          <span id="hero-highlight">in pictures</span>
        </h1>
        <p id="hero-subhead">
          Live every moment through the lens of Marc Aspland, Chief Sports
          photographer
        </p>
      </div>
      <div id="icon-container">
        <AnimatedIcon />
        <p id="icon-text">Scroll to continue</p>
      </div>
    </HeroContainer>
  );
}

export default Hero;
