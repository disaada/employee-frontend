import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        |
        <Link to="/user">User</Link>
        |
        <Link to="/user/new">User New</Link>
        <br /><br />

        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
