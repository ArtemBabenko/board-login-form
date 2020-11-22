import React, { Component } from 'react';
import axios from 'axios';
import {
  AUTH_TITLE, AUTH_DESC, AUTH_COLOR_TITLE, AUTH_FORM_TITLE, AUTH_EMAIL_FIELD_TITLE,
  AUTH_PASS_FIELD_TITLE, AUTH_FORM_COLOR_TITLE, AUTH_BTN_TEXT, AUTH_BTN_COLOR,
  AUTH_BTN_COLOR_TEXT, AUTH_DONTHAVEACC_TEXT, AUTH_REGLINK_TEXT, FILL_ALL_FIELDS_ERR, API_ERR, API_DATA_ERR
} from '../../services';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
import bgAuth from '../../img/bg.png';
import part_cake_img from '../../img/auth-part-cake.png';
import cake_img from '../../img/auth-cake.png';
import './auth.scss';

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      redirect: false
    }
  }

  titleContentRender = (authTitleBasic, authDescBasic, authTitleCustom, authDescCustom) => {
    let title = authTitleCustom;
    let desc = authDescCustom;
    switch (true) {
      case title == null && desc == null:
        title = authTitleBasic;
        desc = authDescBasic;
        break;
      case title == null:
        title = authTitleBasic;
        break;
      case desc == null:
        desc = authDescBasic;
    }
    return {
      title: title,
      info: desc
    }
  }

  titleColorRender = (titleColorBasic, titleColorCustom) => {
    let titleColor = titleColorBasic;
    if (titleColorCustom != null) titleColor = titleColorCustom;
    return {
      color: titleColor
    };
  }

  bgRender = (authBgBasic, authBgCustom) => {
    let bg = authBgBasic;
    if (authBgCustom != null) bg = authBgCustom;
    return {
      background: `url(${bg})`
    };
  }

  imgRender = (authImgBasic, authImgCustom) => {
    let img = authImgBasic;
    if (authImgCustom != null) {
      switch (authImgCustom === 'none') {
        case true:
          img = null;
          break;
        case false:
          img = authImgCustom
          break;
      }
    }
    return {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    };
  }

  formTitleRender = (formTitleBasic, formTitleCustom) => {
    let title = formTitleBasic;
    if (formTitleCustom != null) title = formTitleCustom;
    return title;
  }

  btnColorRender = (btnColorBasic, btnColorTextBasic, btnColorCustom, btnColorTextCustom) => {
    let btnColor = btnColorCustom;
    let btnColorText = btnColorTextCustom;
    switch (true) {
      case btnColor == null && btnColorText == null:
        btnColor = btnColorBasic;
        btnColorText = btnColorTextBasic;
        break;
      case btnColor == null:
        btnColor = btnColorBasic;
        break;
      case btnColorText == null:
        btnColorText = btnColorTextBasic;
    }
    return {
      backgroundColor: btnColor,
      color: btnColorText
    }
  }

  apiAuth = (apiAuthCustom) => {
    let api = API_ERR;
    (apiAuthCustom != null) ? api = apiAuthCustom : console.log(api);
    return api;
  }

  getApiData = (resp, str) => {
    if (str != null) {
      str = str.split('.')
      let obj = resp[str.shift()];
      while (obj && str.length) obj = obj[str.shift()];
      return obj;
    }
  }

  regRenderFlag = () => {
    this.props.regRenderFlag(true);
  }

  emailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };

  passwordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };

  sendUserData = (data) => {
    switch (true) {
      case this.props.apiAuthUserName != null && this.props.apiAuthUserToken != null && this.props.apiAuthErr != null:
        axios.post(this.apiAuth(this.props.apiAuth), data)
          .then(response => {
            if (response.status === 200) {
              localStorage.setItem(this.getApiData(response, this.props.apiAuthUserName), this.getApiData(response, this.props.apiAuthUserToken));
              this.setState({ redirect: true });
            }
          })
          .catch(error => {
            this.setState({ error: this.getApiData(error.response, this.props.apiAuthErr) });
          });
        break;
        
      default: console.log(API_DATA_ERR);
    }
  }

  signInUser = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    if (email === '' || password === '') {
      this.setState({ error: this.formTitleRender(FILL_ALL_FIELDS_ERR, this.props.authFillAllFieldsErr) });
    } else {
      const data = { email: email, password: password }
      this.sendUserData(data);
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to='/' /> }
    const infoTitleBlock = this.titleContentRender(
      AUTH_TITLE, AUTH_DESC,
      this.props.authTitle, this.props.authDesc
    );
    return (
      <div className='auth-container'>
        <Grid container>
          <Grid xs={12} lg={6} item className='content-column'>
            <div className='title-container' style={this.bgRender(bgAuth, this.props.authBg)}>
              <div className='img-part-cake-container'>
                <div className='img-part-cake' style={this.imgRender(part_cake_img, this.props.authTopImg)} />
              </div>
              <div className='title' style={this.titleColorRender(AUTH_COLOR_TITLE, this.props.authColorTitle)}>
                <InfoTitleBlock infoBlock={infoTitleBlock} />
              </div>
              <div className='img-cake-container'>
                <div className='img-cake' style={this.imgRender(cake_img, this.props.authBotImg)} />
              </div>
            </div>
          </Grid>
          <Grid xs={12} lg={6} item className='content-column'>
            <div className='info-container' style={this.titleColorRender(AUTH_FORM_COLOR_TITLE, this.props.authFormColorTitle)}>
              <div className='form-title'>{this.formTitleRender(AUTH_FORM_TITLE, this.props.authFormTitle)}</div>
              <div className='error-msg'>{this.state.error}</div>
              <form className='input-fields' onSubmit={this.signInUser}>
                <div className='field-title'>{this.formTitleRender(AUTH_EMAIL_FIELD_TITLE, this.props.authEmailFieldTitle)}</div>
                <input
                  value={this.state.email}
                  onChange={this.emailChange}
                  type='text'
                />
                <div className='field-title'>{this.formTitleRender(AUTH_PASS_FIELD_TITLE, this.props.authPassFieldTitle)}</div>
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.passwordChange}
                />
                <button
                  className='auth-button'
                  type='submit'
                  style={this.btnColorRender(AUTH_BTN_COLOR, AUTH_BTN_COLOR_TEXT, this.props.authBtnColor, this.props.authBtnColorText)}>
                  {this.formTitleRender(AUTH_BTN_TEXT, this.props.authBtnText)}
                </button>
                <div className='login-link'>
                  <span>{this.formTitleRender(AUTH_DONTHAVEACC_TEXT, this.props.authDontHaveAccText)}</span>
                  <span className='link' onClick={this.regRenderFlag}>{this.formTitleRender(AUTH_REGLINK_TEXT, this.props.authRegLinkText)}</span>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div >
    )
  }
}

export default Auth;

