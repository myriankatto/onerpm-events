import React from 'react';

import agenda from '../../data/agenda.json';

import AgendaCard from '../AgendaCard'


const agenda28List = agenda.dia28;

function Dia28(props) {

  return (
    <div>

    {agenda28List.map((item, index) => {
      if(item.fase.includes(props.checked)) 
      return (      
        <AgendaCard key={index} info={item} index={index} checked={props.checked}/>
)
else return null })}

   
    </div>
  );
}

export default Dia28;
