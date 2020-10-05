import React, { useState, useEffect } from 'react';
import wave from '../../assets/images/wave1.svg';
import wave2 from '../../assets/images/wave2.svg';
import agendaimg from '../../assets/images/agenda.png';

import Dia27 from '../Dia27';
import Dia28 from '../Dia28';

import agendaData from '../../data/agenda.json';

import './styles.scss';

function Agenda() {
  const [filter, setFilter] = useState('dia27');
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
    <div className="agenda">
      <img className="wave" src={wave} alt="wave" />
      <div className="agenda__container">
        <img className="agenda-img" src={agendaimg} alt="agenda" />

        <div className="agenda__filters">
          <div className="data">
            <div className="data-tabs">
              <span
                className={filter === 'dia27' ? 'active' : ''}
                onClick={() => {setFilter('dia27'); setIsChecked('Todos')}}
                value="dia27"
              >
                27/10
              </span>
              <span
                className={filter === 'dia28' ? 'active' : ''}
                onClick={() => {setFilter('dia28'); setIsChecked('Todos')}}
                value="dia28"
              >
                28/10
              </span>
            </div>
            <div className="fase-tabs">
        
            <label>
              <input type="radio"  className="" value="Todos" checked={isChecked === 'Todos'} onChange={(e) => setIsChecked(e.target.value)} />
              <span>Todos</span>
            </label>
      
            <label>
              <input type="radio"  className="blue" value="Básico" checked={isChecked === 'Básico'} onChange={(e) => setIsChecked(e.target.value)} />
              <span>Básico</span>
            </label>
      
            <label>
              <input type="radio" value="Intermediário" checked={isChecked === 'Intermediário'} onChange={(e) => setIsChecked(e.target.value)} />
              <span>Intermediário</span> 
            </label>
        
      
            <label>
              <input type="radio" value="Avançado" checked={isChecked === 'Avançado'} onChange={(e) => setIsChecked(e.target.value)} />
                           <span>Avançado</span>
            </label>
       

            </div>

            {filter === 'dia27' && <Dia27 checked={isChecked} /> }
            {filter === 'dia28' && <Dia28 checked={isChecked}/> }

 


          </div>
        </div>
      </div>
      <img className="wave" src={wave2} alt="wave" />

    </div>
  );
}

export default Agenda;
