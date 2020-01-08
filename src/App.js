import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {firstRoutes} from './config/routes'


function App() {
  return (
    <Router>
      <Switch>
      { firstRoutes.map((route, index) => <Route {...route} key={index}></Route>) }
      </Switch>
    </Router>
  );
}

export default App;
