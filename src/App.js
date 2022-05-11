import logo from './logo.svg';
import './App.css';
import React from 'react';
import StarWarsDetails from './StarWarsDetails';
import StarWarsList from './StarWarsList';
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
            <StarWarsList/>
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
