import React from 'react';
import { API_REG, API_AUTH, REG_TITLE, REG_DESC, AUTH_TITLE, AUTH_DESC, WP_TITLE, WP_DESC} from './services';
import BoardLoginForm from './lib/BoardLoginForm';

function App() {
  return (
    <BoardLoginForm 
       apiReg={API_REG} 
       apiAuth={API_AUTH}
       regTitle={REG_TITLE} 
       regDesc={REG_DESC}
       authTitle={AUTH_TITLE}
       authDesc={AUTH_DESC}
       wpTitle={WP_TITLE}
       wpDesc={WP_DESC}
    />
  );
}

export default App;
