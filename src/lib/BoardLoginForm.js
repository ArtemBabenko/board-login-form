import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Reg from './components/Reg/Reg';
import WelcomePage from './components/WelcomePage/WelcomePage';

function BoardLoginForm(props) {
  
  return (
    <Router>
      <Route path='/reg' render={()=><Reg 
        apiReg={props.apiReg} 
        regTitle={props.regTitle} 
        regDesc={props.regDesc}/>} 
      />
      <Route path='/auth' render={()=><Auth 
        apiAuth={props.apiAuth} 
        authTitle={props.authTitle} 
        authDesc={props.authDesc}/>} 
      />
      <Route path='/welcome-page' render={()=><WelcomePage 
        wpTitle={props.wpTitle} 
        wpDesc={props.wpDesc}/>} 
      />
    </Router>
  );
}

export default BoardLoginForm;
