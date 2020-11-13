import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegModuleContainer from './Components/RegModuleContainer/RegModuleContainer';
import TestHomePage from './Pages/TestHomePage';

function App() {
  return (
    <Router>
      <Route path="/" component={TestHomePage} exact />
      <Route path="/regmodule" component={RegModuleContainer} exact />
    </Router>
  );
}

export default App;
