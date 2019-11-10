import React from 'react';
import logo from './logo.svg';
import FormButton from './components/FormButton';
import Form from './components/Form';
import amazon from './assets/amazon.png'
import './App.css';
import { Route } from 'react-router-dom';

const home = () => {
  return(
    <div>
      <img src={amazon} alt="" style={{height: "100vh", width: "100vw"}}/>
      <FormButton/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <Route path={'/'} exact component={home}/>
     <Route path={'/form'} exact component={Form}/>
    </div>
  );
}

export default App;
