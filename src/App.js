import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import UserDetail from './pages/UserDetail';
import UserNew from './pages/UserNew';

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
            <Route exact path="/user">
              <User />
            </Route>
            <Route path="/user/new">
              <UserNew /> 
            </Route>
            <Route path="/user/:id">
              <UserDetail />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
