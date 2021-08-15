import React from "react";

const ImageResults = (props) => {
   return <img src={props.imagesData[0].previewURL} alt="image" />;
};

export default ImageResults;
