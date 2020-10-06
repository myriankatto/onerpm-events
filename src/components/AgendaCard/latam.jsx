import React, { useState } from 'react';

// import addCalendar from '../../assets/images/add-event.svg';
import arrowDown from '../../assets/images/down-arrow.svg';
// import photo from '../../assets/images/photo.png';

import bola from '../../assets/images/bola.png';
import triangulo from '../../assets/images/triangulo.png';
import quadrado from '../../assets/images/quadrado.png';

function AgendaCard(props) {
  const item = props.info;
  const index = props.index;

  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="agendaes__cards">
        <div className="agendaes__item">
          <div className="agendaes__card">
            <div className="card">
              <div className="agendaes__card-left">
                <div>
                  <h6>{item.time}</h6>
                  </div>

                <div className="agendaes__fase">
                  {item.icon === 'quadrado' && (
                    <img className="agendaes__fase-img" src={quadrado} alt={item.tipo[0]} />
                  )}
                  {item.icon === 'triangulo' && (
                    <img className="agendaes__fase-img" src={triangulo} alt={item.tipo[0]} />
                  )}
                  {item.icon === 'bola' && (
                    <img className="agendaes__fase-img" src={bola} alt={item.tipo[0]} />
                  )}
                  {/* <img className="agenda__fase-img"
                    src={item.icon}
                    alt={item.fase[0]}
                  /> */}
                  <span>{item.tipo[0]}</span>
                </div>
              </div>
              {/* <div className="agenda__card-img">
                <img src={photo} alt={item.title} />
              </div> */}
            </div>
            <div className="agendaes__card-right">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>

            <div className="agendaes__card-icons">
              {item.people && (
                <img
                  className={activeIndex === index ? 'arrowdown' : 'arrowup'}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleChange(index)}
                  src={arrowDown}
                  alt="arrow down"
                />
              )}
              {/* <a href={item.calendar} target="_blank" rel="noopener noreferrer">
                <img src={addCalendar} alt="add to calendar" />
              </a> */}
            </div>
          </div>
          {activeIndex === index ? (
            <div
              className="agendaes__toggle expand-animate collapse-animate"
              style={{ backgroundColor: `${item.color}` }}
            >
              <p>{item.people}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default AgendaCard;
