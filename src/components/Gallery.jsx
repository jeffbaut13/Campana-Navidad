import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataGaleria = [
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
  ,
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
  {
    img: `./src/assets/imagenes/familias-felices.jpg`,
  },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full pt-28 bg-black">
      <div className=" flex-col text-center">
        <h3 className="font-extrabold font-[tusker] text-5xl my-6 text-[#e2d599] tracking-[1.5px]">
          MOMENTOS DE ENTREGA
        </h3>
        <p className="my-12">
          Vive las historias de quienes han compartido su espíritu navideño en
          nuestra caja mágica
        </p>
      </div>

      <div className=" pb-[50px]">
        <Slider {...settings}>
          {dataGaleria.map((d, index) => (
            <div key={index} className="">
              <div className="px-2 flex justify-center items-center">
                <img src={d.img} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Gallery;
