import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        |
        <Link to="/user">User</Link>
        
        <br /><br />

        <Switch>
          <Route path="/" exact>Home</Route>
          <Route path="/user">User</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
