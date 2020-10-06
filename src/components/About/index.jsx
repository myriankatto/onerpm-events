import React from 'react';
import aboutimg from '../../assets/images/about.png';
import bola from '../../assets/images/bola.png';
import triangulo from '../../assets/images/triangulo.png';
import quadrado from '../../assets/images/quadrado.png';

import './styles.scss';
function About() {
  return (
    <div className="about">
      <img  className="about-img" src={aboutimg} alt="o evento" />
      <div className="about__container">
        <div className="about__left">
          <p>
            ONErpm Academy é um <b>evento digital gratuito</b> formado por uma série de painéis,
            workshops e bate-papos para ensinar artistas e selos como darem o próximo passo de suas
            carreiras. No total{' '}
            <b>
              serão dois dias de aprendizagem com grandes nomes do mercado da música e especialistas
              das principais plataformas de streaming e redes sociais.
            </b>
          </p>
          <p>
            O evento terá uma agenda focada em dois grandes temas:{' '}
            <b>
              mercado e comunicação e será dividida em três fases: básico, intermediário e avançado.
            </b>{' '}
            Caberá aos participantes escolherem os seus temas preferidos e suas intensidades,
            considerando que mesmo os correspondentes ao básico são relevantes para diversos
            momentos da carreira do artista.
          </p>
          <p>
            Com a apresentação de dois hosts diretamente do nosso estúdio recém lançado, todos os
            conteúdos serão transmitidos AO VIVO no nosso canal de {' '}
            <a href="https://www.youtube.com/channel/UCEjZPeHi44BbX_g9hfJUlHQ" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            {' '}e <b>não ficarão disponíveis depois</b>, ou seja, será uma experiência única e sem
            direito a repeat. Inscreva-se já e faça a sua agenda conforme a legenda.
          </p>
        </div>
        <div className="about__right">
          
       
          <div className="about__fase">
            <img src={quadrado} alt="quadrado azul" />
            <div>
              <h4 style={{ color: '#0091F1' }}>Básico</h4>
              <p>Abordagem mais inicial sobre o tema, os conteúdos com essa classificação tendem a ser mais didáticos e amplos construtivamente.
 </p>
            </div>
          </div>
          <div className="about__fase">
            <img src={triangulo} alt="Triângulo rosa" />
            <div>
              <h4 style={{ color: '#FF42A8' }}>Intermediário</h4>
              <p>Intensificando um pouco, os conteúdos com essa classificação trazem mais detalhes sobre o tema e propõe algumas reflexões
</p>
            </div>
          </div>
          <div className="about__fase">
            <img src={bola} alt="Círculo laranja" />
            <div>
              <h4 style={{ color: '#FF7A3C' }}>Avançado</h4>
              <p>No terceiro nível, os conteúdos com essa classificação entregam discussões mais aprofundadas e com direcionamentos mais específicos.
</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
