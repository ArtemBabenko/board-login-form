import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
import Reg from './components/Reg/Reg';
import WelcomePage from './components/WelcomePage/WelcomePage';

class BoardLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      regPage: true,
      authPage: false
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

  renderPage = (regPage, authPage) => {
    switch (true) {
      case regPage:
        return <Reg apiReg={this.props.apiReg} regTitle={this.props.regTitle} regDesc={this.props.regDesc}
          regColorTitle={this.props.regColorTitle} regBg={this.props.regBg} regTopImg={this.props.regTopImg} regMidImg={this.props.regMidImg}
          regBotImg={this.props.regBotImg} regFormTitle={this.props.regFormTitle} regEmailFieldTitle={this.props.regEmailFieldTitle}
          regUserNameFieldTitle={this.props.regUserNameFieldTitle} regPassFieldTitle={this.props.regPassFieldTitle}
          regConfPassFieldTitle={this.props.regConfPassFieldTitle} regFormColorTitle={this.props.regFormColorTitle} regBtnText={this.props.regBtnText}
          regBtnColor={this.props.regBtnColor} regBtnColorText={this.props.regBtnColorText} regHaveAccText={this.props.regHaveAccText}
          regEnterLinkText={this.props.regEnterLinkText} regFillAllFieldsErr={this.props.regFillAllFieldsErr} regValidEmailErr={this.props.regValidEmailErr}
          regValidPassCharErr={this.props.regValidPassCharErr} regConfPassErr={this.props.regConfPassErr} regApiErr={this.props.regApiErr}
          authRenderFlag={this.authRenderFlag} welcomeRenderFlag={this.welcomeRenderFlag} />
      case authPage:
        return <Auth apiAuth={this.props.apiAuth} authTitle={this.props.authTitle} authDesc={this.props.authDesc}
          authBg={this.props.authBg} authTopImg={this.props.authTopImg} authBotImg={this.props.authBotImg}
          regRenderFlag={this.regRenderFlag} />
      default:
        return <WelcomePage wpTitle={this.props.wpTitle} wpDesc={this.props.wpDesc} wpBg={this.props.wpBg}
          wpTopImg={this.props.wpTopImg} wpBotImg={this.props.wpBotImg} />
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
