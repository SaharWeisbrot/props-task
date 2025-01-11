// By- Sahar Weisbrot
//Class - 48.6

import React from "react";
import ActionButton from "./components/ActionButton";
import ColorBlock from "./components/ColorBlock";
import ImageWithCaption from "./components/ImageWithCaption";
function App() {
  return (
    <div className="App">
      <ColorBlock colors="blue" />
      <ColorBlock colors="red" />
      <ColorBlock />
      <ColorBlock colors="yellow" />

      <ActionButton
        label="Click me"
        onAction={() => alert("Button clicked!")}
      />
      <ActionButton label="Hello, Im Here!" onAction={() => alert("Thanks")} />

      <ImageWithCaption
        src="https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2021/11/29/SJxjLLSGKK/shutterstock_1241431771.jpg"
        caption="Cute Cat"
      />
      <ImageWithCaption caption="Cute Cat" />
    </div>
  );
}

export default App;
