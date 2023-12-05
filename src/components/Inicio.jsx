import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import Figure from "./Figure";

const Inicio = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  const opts = {
    height: "600px",
    width: "1000px",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
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
    <div className="comercial ">
      <div className="h-1/6 w-full "></div>
      {playing && (
        <div ref={videoRef} className="absolute top-1/2 translate-y-[-50%]">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      )}

      <div className="w-22 h-22">
        <Figure
          handleClick={handleClick}
          imgSrc={"/iconovideo.png"}
          customclas={"cursor-pointer"}
        />
      </div>

      <div className="w-full">
        <div className="w-full h-[50px] gradienteTransparente"></div>
        <div className="flex-col justify-center text-center text-[#e2d599] bg-black ">
          <p className="text-[#e2d599] tracking-[7px]">
            Sumergete en la conmovedora historia de David
            <br />
            donde un simple acto de entrega se transforma en un milagro
            navideño.
          </p>
          <h2 className="font-extrabold font-[tusker] text-3xl my-6">
            La carta que cambio nuestra forma de ver la navidad
          </h2>
          <p className="text-[#e2d599] tracking-[7px]">
            Un niño. Un deseo de entregar. un mundo transformado. La carta de
            David nos enseña el verdadero significado de la navidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
