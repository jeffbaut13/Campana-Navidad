import React from "react";

const MainButton = ({ titulo, HandleClick, cusClasses }) => {
  return (
    <button
      className={`${
        cusClasses ? cusClasses : ""
      } custonBtn Amentti tracking-[15px]`}
      onClick={HandleClick}
    >
      {titulo}
    </button>
  );
};

export default MainButton;
