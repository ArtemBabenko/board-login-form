import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
import Reg from './components/Reg/Reg';
import WelcomePage from './components/WelcomePage/WelcomePage';

class BoardLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      regPage: true,
      authPage: false,
      userEmail: '',
      userPass: ''
    }
  }

  regRenderFlag = (regFlag) => {
    this.setState({ regPage: regFlag, authPage: !regFlag });
  }

  authRenderFlag = (authFlag) => {
    this.setState({ regPage: !authFlag, authPage: authFlag });
  }

  welcomeRenderFlag = (welcomeFlag) => {
    this.setState({ regPage: !welcomeFlag, authPage: !welcomeFlag });
  }

  welcomeTransfData =(userEmail, userPass) => {
    this.setState({userEmail: userEmail, userPass: userPass}); 
  }

  renderPage = (regPage, authPage) => {
    switch (true) {
      case regPage:
        return <Reg apiReg={this.props.apiReg} apiRegErr={this.props.apiRegErr} apiRegUserName={this.props.apiRegUserName} apiRegUserToken={this.props.apiRegUserToken}
          apiRegUserEmail={this.props.apiRegUserEmail} apiRegUserPass={this.props.apiRegUserPass} regTitle={this.props.regTitle} regDesc={this.props.regDesc}
          regColorTitle={this.props.regColorTitle} regBg={this.props.regBg} regTopImg={this.props.regTopImg} regMidImg={this.props.regMidImg}
          regBotImg={this.props.regBotImg} regFormTitle={this.props.regFormTitle} regEmailFieldTitle={this.props.regEmailFieldTitle}
          regUserNameFieldTitle={this.props.regUserNameFieldTitle} regPassFieldTitle={this.props.regPassFieldTitle}
          regConfPassFieldTitle={this.props.regConfPassFieldTitle} regFormColorTitle={this.props.regFormColorTitle} regBtnText={this.props.regBtnText}
          regBtnColor={this.props.regBtnColor} regBtnColorText={this.props.regBtnColorText} regHaveAccText={this.props.regHaveAccText}
          regEnterLinkText={this.props.regEnterLinkText} regFillAllFieldsErr={this.props.regFillAllFieldsErr} regValidEmailErr={this.props.regValidEmailErr}
          regValidPassCharErr={this.props.regValidPassCharErr} regConfPassErr={this.props.regConfPassErr}
          authRenderFlag={this.authRenderFlag} welcomeRenderFlag={this.welcomeRenderFlag} welcomeTransfData={this.welcomeTransfData} />
      case authPage:
        return <Auth apiAuth={this.props.apiAuth} apiAuthErr={this.props.apiAuthErr} apiAuthUserName={this.props.apiAuthUserName} apiAuthUserToken={this.props.apiAuthUserToken}
          authTitle={this.props.authTitle} authDesc={this.props.authDesc} authColorTitle={this.props.authColorTitle}
          authBg={this.props.authBg} authTopImg={this.props.authTopImg} authBotImg={this.props.authBotImg} authFormTitle={this.props.authFormTitle}
          authEmailFieldTitle={this.props.authEmailFieldTitle} authPassFieldTitle={this.props.authPassFieldTitle} authFormColorTitle={this.props.authFormColorTitle}
          authBtnText={this.props.authBtnText} authBtnColor={this.props.authBtnColor} authBtnColorText={this.props.authBtnColorText}
          authDontHaveAccText={this.props.authDontHaveAccText} authRegLinkText={this.props.authRegLinkText} authFillAllFieldsErr={this.props.authFillAllFieldsErr}
          regRenderFlag={this.regRenderFlag} />
      default:
        return <WelcomePage wpUserEmail={this.state.userEmail} wpUserPass={this.state.userPass} wpTitle={this.props.wpTitle} wpDesc={this.props.wpDesc} wpColorTitle={this.props.wpColorTitle} wpBg={this.props.wpBg}
          wpTopImg={this.props.wpTopImg} wpBotImg={this.props.wpBotImg} wpProfileTitle={this.props.wpProfileTitle} wpUserMailFieldTitle={this.props.wpUserMailFieldTitle}
          wpUserPassFieldTitle={this.props.wpUserPassFieldTitle} wpProfileColorTitle={this.props.wpProfileColorTitle} wpBtnText={this.props.wpBtnText}
          wpBtnColor={this.props.wpBtnColor} wpBtnColorText={this.props.wpBtnColorText}
        />
    }
  }

  render() {
    const { regPage, authPage } = this.state;
    return (
      <div>
        {this.renderPage(regPage, authPage)}
      </div>
    );
  }
}

export default BoardLoginForm;
