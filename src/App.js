import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { API_REG, API_AUTH, REG_TITLE, REG_DESC, AUTH_TITLE, AUTH_DESC, WP_TITLE, WP_DESC } from './services';
import BoardLoginForm from './lib/BoardLoginForm';
import Test from './TestComponent/Test';

function App() {
  return (
    <Router>
      {/* <Route path="/" component={Test} exact />
      <Route path="/regmodule" component={BoardLoginForm} exact /> */}
      <Route path='/' render={() => <Test/>} exact />
      <Route path='/regmodule' render={() => <BoardLoginForm
        apiReg={API_REG}
        apiAuth={API_AUTH}
        regTitle={REG_TITLE}
        regDesc={REG_DESC}
        authTitle={AUTH_TITLE}
        authDesc={AUTH_DESC}
        wpTitle={WP_TITLE}
        wpDesc={WP_DESC} />}
      exact />
    </Router>
  );
}

export default App;
