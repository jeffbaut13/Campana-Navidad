import React, { useEffect } from "react";
import { handleClick } from "../config/Anclas";

const Carta = () => {
  const logScrollPercentage = () => {
    // Obtener la altura total de la página
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY;

    // Calcular el porcentaje de avance
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    return scrollPercentage.toFixed(2);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Obtener el porcentaje de avance
      const percentage = logScrollPercentage();
      console.log(percentage);

      // Imprimir el porcentaje en la consola

      const img1 = document.querySelector(".imagen_1");
      const img2 = document.querySelector(".imagen_2");
      const img3 = document.querySelector(".imagen_3");
      const img4 = document.querySelector(".imagen_4");
      const img5 = document.querySelector(".imagen_5");
      const img6 = document.querySelector(".imagen_6");
      const img7 = document.querySelector(".imagen_7");
      const img8 = document.querySelector(".imagen_8");
      // const img9 = document.querySelector('.imagen_9');

      if (parseFloat(percentage) >= 47) {
        img1.classList.add("opacity");
      } else {
        img1.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 51) {
        img2.classList.add("opacity");
      } else {
        img2.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 55) {
        img3.classList.add("opacity");
      } else {
        img3.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 59) {
        img4.classList.add("opacity");
      } else {
        img4.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 62) {
        img5.classList.add("opacity");
      } else {
        img5.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 65) {
        img6.classList.add("opacity");
      } else {
        img6.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 69) {
        img7.classList.add("opacity");
      } else {
        img7.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 73) {
        img8.classList.add("opacity");
      } else {
        img8.classList.remove("opacity");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="carta" className="largo relative">
      <div className="cajaimagenes">
        <div className="absolute top-28 z-10 left-1/2 translate-x-[-50%] text-center">
          <h3 className=" text-5xl mb-6 Tusker text-[--mainColorText]">
            LA CARTA QUE CAMBIÓ NUESTRA FORMA DE VER LA NAVIDAD
          </h3>
          <p>
            Un niño, un deseo de entregar, un mundo transformado. La carta de
            David nos enseña el verdadero significado de la Navidad.
          </p>
        </div>
        <img className="imagen_1" src="/imagenes/mano1.webp" alt="" />
        <img className="imagen_2" src="/imagenes/mano2.webp" alt="" />
        <img className="imagen_3" src="/imagenes/mano3.webp" alt="" />
        <img className="imagen_4" src="/imagenes/mano4.webp" alt="" />
        <img className="imagen_5" src="/imagenes/mano5.webp" alt="" />
        <img className="imagen_6" src="/imagenes/mano6.webp" alt="" />
        <img className="imagen_7" src="/imagenes/mano7.webp" alt="" />
        <img className="imagen_8" src="/imagenes/mano8.webp" alt="" />
        <img className="imagen_9" src="/imagenes/mano9.webp" alt="" />
      </div>
    </div>
  );
};

export default Carta;
