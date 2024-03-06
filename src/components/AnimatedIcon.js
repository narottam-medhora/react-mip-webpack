import React from "react";

import { AnimatedIconSVG } from "../style";

function AnimatedIcon() {
  return (
    <AnimatedIconSVG id="icon" width={18} height={50}>
      <g id="icon-mouse">
        <rect x="1" y="1" width="15.81" height="25" rx="7.91" ry="7.91" />
      </g>
      <g id="icon-wheel">
        <line x1="8.91" y1="5.53" x2="8.91" y2="11.64" />
        <g id="icon-chevron">
          <line x1="1" y1="29.13" x2="8.91" y2="33.63" />
          <line x1="16.81" y1="29.25" x2="8.91" y2="33.63" />
        </g>
      </g>
    </AnimatedIconSVG>
  );
}

export default AnimatedIcon;
