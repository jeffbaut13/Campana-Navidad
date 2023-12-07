import React from "react";

const MainButton = ({ titulo, HandleClick, cusClasses }) => {
  return (
    <button
      className={`${
        cusClasses ? cusClasses : ""
      } w-full custonBtn Amentti tracking-[7px]`}
      onClick={HandleClick}
    >
      {titulo}
    </button>
  );
};

export default MainButton;
