import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
     <div>
      <AppBar />
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/signup" component={Signup}/>
       <Route exact path="/login" component={Login}/>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
