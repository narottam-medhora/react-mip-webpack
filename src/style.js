import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}


body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    background-color: black;
    color: white;
    font-family: "RobotoRegular", sans-serif;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

#root, #__next {
    isolation: isolate;
}
`;

export const HeroContainer = styled.section`
  width: 100svw;
  height: 100svh;

  display: flex;
  flex-direction: column;
  align-items: center;

  #hero-masthead {
    margin-block-start: 1.5em;
  }

  #hero-header {
    margin-inline-start: 1em;
  }

  #hero-header {
    font-family: "Times Modern", serif;
  }

  #hero-firstname {
    display: block;

    margin-block-start: 2em;
    margin-inline-start: 1em;

    font-size: 4rem;
    line-height: 3rem;
  }

  #hero-lastname {
    display: block;

    font-size: 5.625rem;
    line-height: 4rem;
  }

  #hero-highlight {
    color: #ff6f6f;

    margin-inline-start: 1em;

    font-size: 2.8125rem;
    line-height: 2rem;
  }

  #hero-subhead {
    width: 8em;

    font-family: "Times Digital W04 Regular", serif;
    font-size: 1.0625rem;

    margin-block-start: 25%;
    margin-inline-start: 2em;
  }

  #icon-container {
    position: absolute;
    bottom: 0;
    left: 2em;
    margin-block-end: 2em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #icon-text {
    width: 50%;
    font-size: 0.8125rem;
  }

  @media (min-width: 768px) {
    .hero-text {
      position: absolute;
      left: 10em;
      top: 10em;
    }

    #icon-container {
      left: 45%;
    }
  }
`;

export const AnimatedIconSVG = styled.svg`
  width: 18px;
  height: 50px;
  stroke: white;
  stroke-width: 2;

  fill: none;

  #icon-wheel,
  #icon-chevron {
    transform-origin: 0 10px;
    animation: scroll 1s ease-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(0.2em);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const ScrollerSection = styled.section`
  padding-block-end: 10svh;

  .step-header,
  .step-text {
    font-family: Times Digital W04 Regular, serif;
    font-size: 1.125rem;
  }

  .step-header {
    color: #ff6f6f;
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  width: 100svw;
  height: 100svh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImagesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.currentStepIndex === props.index ? 1 : 0)};
  transition: opacity 0.2s ease-in;
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  z-index: 99999;
  left: 0;

  display: grid;
  gap: 0.2em;

  margin-block: auto;
  margin-inline-start: 1em;

  height: 90%;
`;

export const ProgressBar = styled.div`
  min-width: ${(props) =>
    props.d === 45 || props.d === 91 ? "max-content" : "9px"};
  height: ${(props) => (props.d === 45 || props.d === 91 ? "1.5em" : "3px")};

  background-color: ${(props) =>
    props.d === 45 || props.d === 91
      ? "inherit"
      : props.currentMinute >= props.d
      ? "#ff7676"
      : "inherit"};

  color: ${(props) =>
    props.currentMinute >= props.d ? "#ff7676" : "rgba(256, 256, 256, 0.15)"};
  font-size: 0.8rem;

  transition: background-color 0.5s ease-in;
`;

export const BurstButton = styled.button`
  width: 40%;
  z-index: 99999;
  opacity: ${(props) => (props.isBurstButtonVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in;

  position: absolute;
  bottom: 2em;
  margin-inline: auto;

  background-color: white;
  color: black;
  border: none;

  font-family: "RotoboRegular", sans-serif;
  font-size: 1rem;

  padding: 0.5em 1em;
  cursor: pointer;
`;

export const BurstContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 99999;

  width: 100svw;
  height: 100svh;
`;

export const BurstImageContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  background: center/cover no-repeat url(${(props) => props.image});
  opacity: ${(props) => (props.index === props.visibleBurstImageIndex ? 1 : 0)};
  z-index: ${(props) => props.index};

  transition: opacity 500ms ease-in;
`;
