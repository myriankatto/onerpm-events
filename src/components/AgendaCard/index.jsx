import React, { useState } from 'react';

import addCalendar from '../../assets/images/add-event.svg';
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
      <div className="agenda__cards">
        <div className="agenda__item">
          <div className="agenda__card">
            <div className="card">
              <div className="agenda__card-left">
                <div>
                  <h6>{item.time}</h6>
                </div>

                <div className="agenda__fase">
                  {item.icon === 'quadrado' && (
                    <img className="agenda__fase-img" src={quadrado} alt={item.fase[0]} />
                  )}
                  {item.icon === 'triangulo' && (
                    <img className="agenda__fase-img" src={triangulo} alt={item.fase[0]} />
                  )}
                  {item.icon === 'bola' && (
                    <img className="agenda__fase-img" src={bola} alt={item.fase[0]} />
                  )}
                  {/* <img className="agenda__fase-img"
                    src={item.icon}
                    alt={item.fase[0]}
                  /> */}
                  <span>{item.fase[0]}</span>
                </div>
              </div>
              <div className="agenda__card-img">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
            <div className="agenda__card-right">
              <h4>{item.tipo}</h4>
              <h2>{item.title}</h2>
              <p>{item.person}</p>
            </div>
            <div className="agenda__card-icons">
              <img
                className={activeIndex === index ? 'arrowdown' : 'arrowup'}
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(index)}
                src={arrowDown}
                alt="arrow down"
              />

              <a href={item.calendar} target="_blank" rel="noopener noreferrer">
                <img src={addCalendar} alt="add to calendar" />
              </a>
            </div>
          </div>
          {activeIndex === index ? (
            <div
              className="agenda__toggle expand-animate collapse-animate"
              style={{ backgroundColor: `${item.color}` }}
            >
              <p>{item.description}</p>
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
