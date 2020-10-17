import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { API_REG, API_AUTH, REG_TITLE, REG_DESC, AUTH_TITLE, AUTH_DESC, WP_TITLE, WP_DESC } from './services';
import RegModuleContainer from './Components/RegModuleContainer/RegModuleContainer';
import TestHomePage from './Pages/TestHomePage';

function App() {
  return (
    <Router>
      <Route path="/" component={TestHomePage} exact />
      <Route path="/regmodule" component={RegModuleContainer} exact />
      {/* <Route path='/' render={() => <TestHomePage/>} exact />
      <Route path='/regmodule' render={() => <BoardLoginForm
        apiReg={API_REG}
        apiAuth={API_AUTH}
        regTitle={REG_TITLE}
        regDesc={REG_DESC}
        authTitle={AUTH_TITLE}
        authDesc={AUTH_DESC}
        wpTitle={WP_TITLE}
        wpDesc={WP_DESC} />}
      exact /> */}
    </Router>
  );
}

export default App;
