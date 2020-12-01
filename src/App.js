import React from 'react';
import './style/App.css';
import Header from './Header';
import Free3d from './Free3d';
import YogaCards from './YogaCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    //BEM class naming convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/YogaCards" component={YogaCards} />
          <Route path="/" exact component={Free3d} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
