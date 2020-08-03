import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Reg from './components/Reg/Reg';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
    <Router>
      <Route path='/' component={Reg} exact />
      <Route path='/auth' component={Auth} exact />
      <Route path='/welcome-page' component={WelcomePage} exact />
    </Router>
  );
}

export default App;
