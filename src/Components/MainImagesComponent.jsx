import React, { useState } from "react";
import data from "./ImageData";
import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";

const MainImagesComponent = () => {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="technologies-background">
      <div className="main-container">
        {data.map((item) => (
          <ImageComponent
            key={item.id}
            image={item.imageUrl}
            heading={item.heading}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image-container">
          <div className="services-offer">
            <p className="selected-image-content">{selectedImage.content}</p>
            <h4>{selectedImage.title}</h4>
          </div>
          <ul>
            {selectedImage.services.map(({ linkTo, title }, index) => (
              <li key={index}>
                <span className="dot"></span>
                {linkTo ? <Link to={linkTo}>{title}</Link> : title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainImagesComponent;
