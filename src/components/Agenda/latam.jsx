import React, { useState, useEffect } from 'react';
// import wave from '../../assets/images/wave1.svg';
// import wave2 from '../../assets/images/wave2.svg';
import agendaimg from '../../assets/images/agenda-es.png';

import Dia28 from '../Dia28/latam';
import Dia29 from '../Dia29/latam';
import Dia30 from '../Dia30/latam';

import agendaData from '../../data/agenda.json';

import './styles.scss';

function Agenda() {
  const [filter, setFilter] = useState('dia28');
  const [agenda, setAgenda] = useState([]);
  const [isChecked, setIsChecked] = useState('Todos');

  useEffect(() => {
    setAgenda(agendaData);
  }, []);

  useEffect(() => {
    setAgenda([]);
    const filtered = agenda.map((x) => ({
      ...x,
      filtered: Object.value(agenda).includes('filter'),
    }));
    setAgenda(filtered);
  }, []);

  return (
    <div className="agendaes">
      {/* <img className="wave" src={wave} alt="wave" /> */}
      <div className="agendaes__container">
        <img className="agendaes-img" src={agendaimg} alt="agenda" />

        <div className="agendaes__filters">
          <div className="data">
            <div className="data-tabs">
              <span
                className={filter === 'dia28' ? 'active' : ''}
                onClick={() => {
                  setFilter('dia28');
                  setIsChecked('Todos');
                }}
                value="dia28"
              >
                28/10
              </span>
              <span
                className={filter === 'dia29' ? 'active' : ''}
                onClick={() => {
                  setFilter('dia29');
                  setIsChecked('Todos');
                }}
                value="dia29"
              >
                29/10
              </span>
              <span
                className={filter === 'dia30' ? 'active' : ''}
                onClick={() => {
                  setFilter('dia30');
                  setIsChecked('Todos');
                }}
                value="dia30"
              >
                30/10
              </span>
            </div>
            <div className="fase-tabs">
              <label>
                <input
                  type="radio"
                  className=""
                  value="Todos"
                  checked={isChecked === 'Todos'}
                  onChange={(e) => setIsChecked(e.target.value)}
                />
                <span>Todos</span>
              </label>

              <label>
                <input
                  type="radio"
                  className="blue"
                  value="Panel"
                  checked={isChecked === 'Panel'}
                  onChange={(e) => setIsChecked(e.target.value)}
                />
                <span>Páneles</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="Charla / Taller"
                  checked={isChecked === 'Charla / Taller'}
                  onChange={(e) => setIsChecked(e.target.value)}
                />

                <span> Charlas y Talleres</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="Showcase"
                  checked={isChecked === 'Showcase'}
                  onChange={(e) => setIsChecked(e.target.value)}
                />
                                <span> Showcases</span>

              </label>
            </div>

            {filter === 'dia28' && <Dia28 checked={isChecked} />}
            {filter === 'dia29' && <Dia29 checked={isChecked} />}
            {filter === 'dia30' && <Dia30 checked={isChecked} />}
          </div>
        </div>
      </div>
      {/* <img className="wave" src={wave2} alt="wave" /> */}
    </div>
  );
}

export default Agenda;
