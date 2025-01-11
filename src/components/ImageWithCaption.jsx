import React from "react";

//A component that receives an image address and a caption for the image
// and creates an image with the caption,
// if there is no image address the component records as p that the image is not available

function ImageWithCaption({ src, caption }) {
  const isSrc = src ? src : ""; //Checks if a src has been redeived
  const imageStyle = {
    maxWidth: "50%",
    height: "auto",
  };
  return (
    <div>
      {isSrc ? (
        <img src={isSrc} alt={caption} style={imageStyle} />
      ) : (
        <p>Image not available</p>
      )}
      <figcaption>{caption}</figcaption>
    </div>
  );
}

export default ImageWithCaption;
