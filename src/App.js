import React from 'react';
import './App.css';
import {Switch, Route , BrowserRouter } from 'react-router-dom'
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
