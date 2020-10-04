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
        <div className="section__carousel">
         
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
        <a href="/#" className="btn" target="_blank" rel="noopener noreferrer">
          Inscreva-se gratuitamente
        </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
