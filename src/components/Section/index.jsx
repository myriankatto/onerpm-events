import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import banner5 from '../../assets/images/banner5.jpg';
import banner6 from '../../assets/images/banner6.jpg';
import banner7 from '../../assets/images/banner7.jpg';
import banner8 from '../../assets/images/banner8.jpg';

import gif1 from '../../assets/images/FORMAS1.gif';
import gif2 from '../../assets/images/FORMAS2.gif';
import gif3 from '../../assets/images/FORMAS3.gif';

import './styles.scss';

function Section() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <div className="section">
      <div className="section__container">
        <div className="section__carousel">
          <Slider {...settings}>
            <div>
              <img src={banner1} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner2} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner3} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner4} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner5} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner6} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner7} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner8} alt="Banner ONErpm Academy" />
            </div>
          </Slider>
        </div>
        <div className="section__dados">
          <div className="section__item">
            <h4>50</h4>
            <span>especialistas referências do mercado</span>
          </div>
          <img className="formas" src={gif1} alt="formas" />
          <div className="section__item">
            <h4>26</h4>
            <span>bate-papos, painéis e workshops</span>
          </div>
          <img className="formas" src={gif2} alt="formas" />

          <div className="section__item">
            <h4>16</h4>
            <span>horas de conteúdo</span>
          </div>
          <img className="formas" src={gif3} alt="formas" />

          <div className="section__item">
            <h4>100%</h4>
            <span>online e gratuito</span>
          </div>
        </div>
        <div className="section__button">
          <a href="https://forms.gle/45wBXWeWEFD8tLd56" className="btn" target="_blank" rel="noopener noreferrer">
            Inscreva-se gratuitamente
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
