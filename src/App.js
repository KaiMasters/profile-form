import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import Home from './components/Home';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Route path={'/'} exact component={Home}/>
     <Route path={'/form'} exact component={Form}/>
    </div>
  );
}

export default App;
