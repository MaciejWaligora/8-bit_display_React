import React, { useState } from "react";
import { schemes } from "./colorSchemes";

export default function Digit({ val, width, theme = "apollo" }) {
  let dotted = false;
  let map = {
    0: [1, 2, 3, 4, 6, 7],
    1: [4, 6],
    2: [1, 3, 4, 5, 7],
    3: [3, 4, 5, 6, 7],
    4: [2, 4, 5, 6],
    5: [2, 3, 5, 6, 7],
    6: [1, 2, 3, 5, 6, 7],
    7: [3, 4, 6],
    8: [1, 2, 3, 4, 5, 6, 7],
    9: [2, 3, 4, 5, 6, 7],
  };

  if (val.length > 1) {
    dotted = true;
    val = parseInt(val[0]);
  } else {
    val = parseInt(val);
  }

  let high = (index) => {
    let tolight = map[val];
    for (let i of tolight) {
      if (i === index) {
        return true;
      }
    }
    return false;
  };

  return (
    <svg width={`${width}px`} height={`${width * 1.68}px`}>
      <rect
        x="0"
        y="0"
        width={`${width}`}
        height={`${width * 1.68}`}
        fill={schemes[theme].bg}
      ></rect>
      <g transform={`scale(${width / 32})`}>
        <path
          d="M 4 27 L 2 29 L 2 45 L 4 47 L 6 45 L 6 29 L 4 27"
          fill={high(1) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 4 5 L 2 7 L 2 23 L 4 25 L 6 23 L 6 7 L 4 5"
          fill={high(2) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 5 4 L 7 2 L 23 2 L 25 4 L 23 6 L 7 6 L 5 4"
          fill={high(3) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 26 5 L 24 7 L 24 23 L 26 25 L 28 23 L 28 7 L 26 5"
          fill={high(4) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 5 26 L 7 24 L 23 24 L 25 26 L 23 28 L 7 28 L 5 26"
          fill={high(5) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 26 27 L 24 29 L 24 45 L 26 47 L 28 45 L 28 29 L 26 27"
          fill={high(6) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 7 46 L 5 48 L 7 50 L 23 50 L 25 48 L 23 46 L 7 46"
          fill={high(7) ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
        <path
          d="M 27 49 A 1 1 0 0 0 31 49 A 1 1 0 0 0 27 49"
          fill={dotted ? schemes[theme].fontHigh : schemes[theme].fontLow}
          stroke={dotted ? schemes[theme].fontHigh : schemes[theme].fontLow}
        ></path>
      </g>
    </svg>
  );
}
