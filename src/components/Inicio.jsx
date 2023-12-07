import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import Figure from "./Figure";
import { handleClick } from "../config/Anclas";

const Inicio = ({ videoId, isTablet, isMobile }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();


  const opts = {
    height: !isMobile && !isTablet ? "600px" : "40vh",
    width: !isMobile && !isTablet ? "1000px" : "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClickVideo = () => {
    setPlaying(true);
    console.log(playing);
  };

  const handleClose = (e) => {
    // Verificar si el clic fue fuera del video
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setPlaying(false);
    }
  };

  useEffect(() => {
    // Agregar un event listener para cerrar el video cuando se hace clic fuera de él
    document.addEventListener("mousedown", handleClose);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <div id="inicio" className="comercial">
      <div className="h-1/6 w-full "></div>
      {playing && (
        <div ref={videoRef} className="absolute max-xl:w-11/12 top-1/2 max-xl:left-1/2 max-xl:translate-x-[-50%] translate-y-[-50%]">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      )}

      <div className="w-22 h-22">
        <Figure
          handleClick={handleClickVideo}
          imgSrc={"/iconovideo.png"}
          customclas={"cursor-pointer"}
        />
      </div>

      <div className="w-full">
        <div className="w-full h-[50px] gradienteTransparente"></div>
        <div className="flex-col justify-center text-center text-[#e2d599] bg-black ">
          <h2 className="text-[#e2d599] tracking-[7px] m-0 ">
            Sumérgete en la conmovedora historia de David,
            <br />
            donde un simple acto de entrega se transforma en un milagro
            navideño.
          </h2>
          <span
            onClick={() => handleClick("caja")}
            className=" cursor-pointer inline-block mt-4 w-7 h-7"
          >
            <svg
              id="uuid-bc49a48d-4532-4040-92c5-f3b4ea47b061"
              data-name="Capa 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 293.11 293.11"
            >
              <path
                className="down"
                d="m146.55,23.29c68.08,0,123.26,55.19,123.26,123.26s-55.19,123.26-123.26,123.26S23.29,214.63,23.29,146.55,78.48,23.29,146.55,23.29h0Zm0-16.14C69.68,7.15,7.15,69.69,7.15,146.55s62.54,139.4,139.4,139.4,139.41-62.54,139.41-139.4S223.42,7.15,146.55,7.15h0Z"
              />
              <path
                className="down"
                d="m146.27,154.62c-2.05,0-4.11-.78-5.68-2.34l-48.46-48.03c-3.17-3.14-3.19-8.25-.05-11.41,3.14-3.17,8.25-3.19,11.41-.05l42.81,42.43,43.34-42.47c3.18-3.12,8.29-3.07,11.41.12,3.12,3.18,3.07,8.29-.12,11.41l-49.02,48.03c-1.57,1.54-3.61,2.31-5.65,2.31Z"
              />
              <path
                className="down"
                d="m146.27,225.64c-2.05,0-4.11-.78-5.68-2.34l-48.46-48.03c-3.17-3.14-3.19-8.25-.05-11.41,3.14-3.16,8.25-3.19,11.41-.05l42.81,42.44,43.34-42.47c3.18-3.12,8.29-3.07,11.41.12,3.12,3.18,3.07,8.29-.12,11.41l-49.02,48.03c-1.57,1.54-3.61,2.31-5.65,2.31Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
