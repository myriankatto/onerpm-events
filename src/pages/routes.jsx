import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
import Brasil from './Brasil'
import Latam from './Latam'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/brasil"  component={Brasil} />
      <Route path="/latam"  component={Latam} />
    </BrowserRouter>
  );
}

export default Routes;
