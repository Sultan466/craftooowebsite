import React from "react";

const ImageComponent = ({ image, heading, onClick }) => {
  return (
    <div className="image-container" onClick={onClick}>
      <img src={image} alt={heading} className="image" />
      <h3 className="image-content">{heading}</h3>
    </div>
  );
};

export default ImageComponent;
