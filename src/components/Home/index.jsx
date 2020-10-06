import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import logoBR from '../../assets/images/logo_br.png';
import logoES from '../../assets/images/logo_es.png';

import './styles.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <img className="logo" src={logo} alt="ONErpm" />
          <h1>EVENTS</h1>
        </div>
       <div className="home__sections">
          <div className="section">
            <Link to="/brasil">
              <div
                className="tooltip"
                title="Evento gratuito em português de dois dias para artistas darem o próximo passo em suas carreiras
"
              >
                <img className="br" src={logoBR} alt="ONErpm academy" />
              </div>
            </Link>
            <h4>BRASIL</h4>
            <span>27.10 - 28-10</span>
            <Link to="/brasil" className="btn">
              Inscreva-se
            </Link>
          </div>

          <div className="vertical"></div>
          <div className="section">
            <Link to="/latam">
               <div
                className="tooltip"
                title="Evento gratuito en español para discutir los diferentes caminos del mundo de la música
"
              >
                <img className="es" src={logoES} alt="semana ONErpm" />
              </div> 
            </Link>
            <h4>LATAM</h4>
            <span>28.10 - 30-10</span>
            <Link to="/latam" className="btn">
              Inscríbete
            </Link>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Home;
