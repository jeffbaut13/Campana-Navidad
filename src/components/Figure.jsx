import React from "react";

const Figure = ({ imgSrc, customclas, imagenRef, handleClick }) => {
  return (
    <figure className={`w-full h-full ${customclas ? customclas : ""}`}>
      <img onClick={handleClick} ref={imagenRef} src={imgSrc} alt="" />
    </figure>
  );
};

export default Figure;
