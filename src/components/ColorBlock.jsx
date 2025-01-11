import React from "react";
//A component that receives props to create a square,
// if a color is received as a parameter,
// it returns the square in that color, if not, it returns the square in gray

function ColorBlock({ colors }) {
  const color = colors ? colors : "grey"; //Checks if a color has been received

  const square = {
    backgroundColor: color,
    width: "50px",
    height: "50px",
    marginRight: "10px",
    display: "inline-block",
  };
  return <div style={square}></div>;
}

export default ColorBlock;
