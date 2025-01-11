import React from "react";

//A component that receives props of a caption
// and a function that operates on a button,
// the component creates a button with the caption on it and performs the function on clicking

function ActionButton({ label, onAction }) {
  return (
    <div>
      <button onClick={onAction}>{label}</button>
    </div>
  );
}

export default ActionButton;
