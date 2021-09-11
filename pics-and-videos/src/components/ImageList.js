import "./imageStyle.css";
import React from "react";

const ImageList = props => {
  const mappedImages = props.imagesListComponent.map(
    ({ id, urls, alt_description }) => {
      return <img key={id} src={urls.small} alt={alt_description} />;
    }
  );

  return <div className="image-list">{mappedImages}</div>;
};

export default ImageList;
