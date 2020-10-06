import React from 'react';
// import CarouselContent from '../CarouselContent';
// import banner from '../../assets/images/rect.svg';
import gif1 from '../../assets/images/FORMAS1.gif';
import gif2 from '../../assets/images/FORMAS2.gif';
import gif3 from '../../assets/images/FORMAS3.gif';

import './styles.scss';

function Section() {
  return (
    <div className="section">
      <div className="section__container">
        {/* <div className="section__video">
        <video controls >
      <source src={video} type="video/mp4"/>
</video>
        </div> */}
        {/* <div className="section__dados"> */}
          {/* <div className="section__item">
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
        </div> */}
        <div className="section__button">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmlY-wLcegaEz_aakx9v-l8QzClVu22U1uO5Cdo1km_6V0nQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          
          >
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
