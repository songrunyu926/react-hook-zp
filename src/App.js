import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'


function App() {
  return (
    <Router>
      <Switch>
      { routes.map((route, index) => <Route {...route} key={index}></Route>) }
      </Switch>
    </Router>
  );
}

export default App;
