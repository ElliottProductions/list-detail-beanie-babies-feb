import './App.css';
import React from 'react';
import StarWarsDetails from './StarWarsDetails';
import StarWarsPage from './StarWarsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <StarWarsPage/>
          </Route>
          <Route path="/details/:id">
            <StarWarsDetails/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
