import React, { useRef } from "react";
import Figure from "./Figure";
import NavResponsive from "./NavResponsive";
import Menu from "./Menu";

const Header = ({ isTablet, isMobile }) => {
  const imagenRef = useRef();
  const linesRef = useRef([]);

  return (
    <div className="Amentti blurs fixed z-[10000] w-full h-20  px-8">
      <nav className="flex justify-between items-center w-full h-full border-b-[1px] border-w border-[--mainColorText]">
        <div className="h-full">
          <Figure
            customclas={"w-full h-full"}
            imagenRef={imagenRef}
            imgSrc={"/prospero-blanco.svg"}
          />
        </div>
        {!isMobile && !isTablet ? (
          <Menu linesRef={linesRef} />
        ) : (
          <NavResponsive />
        )}
      </nav>
    </div>
  );
};

export default Header;
