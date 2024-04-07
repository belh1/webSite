import React from "react";
import "../estilo/sobre.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import img1 from "../img/img1.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";
import img5 from "../img/img5.jpeg";
import img6 from "../img/img6.jpeg";
import img7 from "../img/img7.jpeg";
import gus from "../img/gus.jpeg";
import gabs from "../img/gabs.jpeg";
import alex from "../img/alex.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Sobre = () => {
  const swiperRef = React.useRef(null);

  const imagens = [img3,img1, img4,img5,img6,img7,gus,gabs,alex];
  const textos = [
    "Thiago",
    "Elber",
    "Ramom",
    "Guto",
    "Willian",
    "Dayane",
    "Gus",
    "Gabs",
    "Alexandre",
  ];

  const imagensComTextos = imagens.map((imagem, index) => ({
    imagem,
    texto: textos[index]
  }));

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    } else {
      console.error("Swiper não inicializado.");
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    } else {
      console.error("Swiper não inicializado.");
    }
  };
  
  return (
    <section id="sobre">
      <div className="sobre__container">
        <div className="sobre__top">
          <h2 className="quem_somos">Quem Somos?</h2>
          <p>Descrição</p>
        </div>

        <div
          className="carousel-wrapper"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            navigation={false}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
          >
            {imagensComTextos.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="image-container">
                  <img src={item.imagem} alt={`Figura ${index + 1}`} />
                  <div className="text-overlay">
                    <p>{item.texto}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="btnL" onClick={slidePrev}><FaArrowLeft /></button>
          <button className="btnR" onClick={slideNext}><FaArrowRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
