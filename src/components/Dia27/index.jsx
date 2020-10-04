import React from 'react';

import agenda from '../../data/agenda.json';


import AgendaCard from '../AgendaCard'


const agenda27List = agenda.dia27;

function Dia27(props) {

  return (
    <div>

    {agenda27List.map((item, index) => {
      if(item.fase.includes(props.checked)) 
      return (      
        <AgendaCard key={index} info={item} index={index} checked={props.checked}/>
)
else return null  })}

   
    </div>
  );
}

export default Dia27;
