import React from 'react';
import aboutimg from '../../assets/images/elevento.png';
import bola from '../../assets/images/bola.png';
import triangulo from '../../assets/images/triangulo.png';
import quadrado from '../../assets/images/quadrado.png';

import './styles.scss';
function About() {
  return (
    <div className="aboutes">
      <div className="aboutes__container">
      <img className="aboutes-img" src={aboutimg} alt="o evento" />
        <div className="aboutes__left">
          <p>
            <b>La Semana ONErpm</b> es un evento online con 3 días llenos de contenido académico
            presentadas por parte del equipo de <b>ONErpm</b>, aliados comerciales, artistas y gente del
            medio de la música y el entretenimiento.
          </p>
          <p>
            Cubriremos una variedad de temas desde distribución, management, booking, negocios de la
            música, becas, ecosistema musical y más, por medio de conferencias, talleres y
            masterclasses con miembros destacados de la industria de la música.
          </p>
          <p>
            Todos los eventos serán completamente gratuitos y serán transmitidos en nuestros canales
            y redes sociales.
          </p>
        </div>
        <div className="aboutes__right">
          <div className="aboutes__fase">
            <img src={bola} alt="Círculo laranja" />
            <div>
              <h4>Páneles</h4>
            </div>
          </div>
          <div className="aboutes__fase">
            <img src={triangulo} alt="Triângulo rosa" />
            <div>
              <h4>Charlas y Talleres</h4>
            </div>
          </div>
          <div className="aboutes__fase">
            <img src={quadrado} alt="quadrado azul" />
            <div>
              <h4>Showcases</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
