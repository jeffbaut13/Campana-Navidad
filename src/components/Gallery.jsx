import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataGaleria = [
  {
    img: "/imagenes/familias-felices.jpg",
  },
  {
    img: "/imagenes/familias-felices.jpg",
  },
  {
    img: "/imagenes/familias-felices.jpg",
  },
  {
    img: "/imagenes/familias-felices.jpg",
  },
  {
    img: "/imagenes/familias-felices.jpg",
  },
  {
    img: "/imagenes/familias-felices.jpg",
  },
  {
    img: "/imagenes/familias-felices.jpg",
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full pt-28 bg-black" id="momentos">
      <div className="flex-col text-center xs:px-3.5">
        <h3 className="font-extrabold font-[tusker] text-5xl my-6 text-[#e2d599] tracking-[1.5px]">
          MOMENTOS DE ENTREGA
        </h3>
        <p className="my-12">
          Vive las historias de quienes han compartido su espíritu navideño en
          nuestra caja mágica
        </p>
      </div>

{/*       <div className="pb-[50px]">
        <Slider {...settings}>
          {dataGaleria.map((d, index) => (
            <div
              key={index}
              className=""
              onClick={() => handleImageClick(d.img)}
            >
              <div className="px-2 flex justify-center items-center">
                <img src={d.img} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
 */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <img
            src={selectedImage}
            alt=""
            style={{ width: "80%", maxHeight: "80%", borderRadius: "8px" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
