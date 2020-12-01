import React from 'react';
import './style/App.css';
import Header from './Header';
import Free3d from './Free3d';
import YogaCards from './YogaCards';
import Resources from './Resources';
import Team from './Team';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Audio } from 'spacesvr';
import { Vector3 } from 'three';

function App() {
  return (
    <div className="app">
      <Audio url="lofi.mp3" position={new Vector3(0, 4, 0)} />
      <Router>
        <Header />
        <Switch>
          <Route path="/YogaCards" component={YogaCards} />
          <Route path="/" exact component={Free3d} />
          <Route path="/Resources" component={Resources} />
          <Route path="/Team" component={Team} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
