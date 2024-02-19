import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgSlider1 from '../imagenes/imgSlider1.jpg';
import imgSlider2 from '../imagenes/imgSlider2.jpg';
import imgSlider3 from '../imagenes/imgSlider3.png';

import producto1 from '../imagenes/producto1.png';
import producto2 from '../imagenes/producto2.png';
import producto3 from '../imagenes/producto3.png';
import producto4 from '../imagenes/producto4.jpg';


export const home = ({ nombre, quiensomos, bienvenida }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="inicio">
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={imgSlider1} alt="Promodion 1" />
          </div>
          <div>
            <img src={imgSlider2} alt="Promocion 2" />
          </div>
          <div>
            <img src={imgSlider3} alt="Promocion 3" />
          </div>
        </Slider>
      </div>
      <div className="row mt-5 p-3">
        <div className='col-sm-3 col-md-4 col-4'>
          <h1>{nombre}</h1>
          <div className="alert alert-info" role="alert">{bienvenida}</div>
          <p>{quiensomos}</p>
        </div>
        <div className='col-sm-9 col-md-8 col-8'>
          <div className='row'>
            <div className='col-6 p-5'><img src={producto1} alt='Producto 1' className='producto' /></div>
            <div className='col-6 p-5'><img src={producto2} alt='Producto 1' className='producto' /></div>
          </div>
          <div className='row'>
            <div className='col-6 p-5'><img src={producto3} alt='Producto 1' className='producto'/></div>
            <div className='col-6 p-5'><img src={producto4} alt='Producto 1' className='producto'/></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home;