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
        return <Reg apiReg={this.props.apiReg} regTitleCustom={this.props.regTitleCustom} regDescCustom={this.props.regDescCustom}
          regBgCustom={this.props.regBgCustom} regTopImgCustom={this.props.regTopImgCustom} regMidImgCustom={this.props.regMidImgCustom}
          regBotImgCustom={this.props.regBotImgCustom} authRenderFlag={this.authRenderFlag} welcomeRenderFlag={this.welcomeRenderFlag} />
      case authPage:
        return <Auth apiAuth={this.props.apiAuth} authTitleCustom={this.props.authTitleCustom} authDescCustom={this.props.authDescCustom}
          authBgCustom={this.props.authBgCustom} authTopImgCustom={this.props.authTopImgCustom} authBotImgCustom={this.props.authBotImgCustom}
          regRenderFlag={this.regRenderFlag} />
      default:
        return <WelcomePage wpTitleCustom={this.props.wpTitleCustom} wpDescCustom={this.props.wpDescCustom} wpBgCustom={this.props.wpBgCustom}
          wpTopImgCustom={this.props.wpTopImgCustom} wpBotImgCustom={this.props.wpBotImgCustom} />
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
