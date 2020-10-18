import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
    let title = authTitleBasic;
    let desc = authDescBasic;
    if (authTitleCustom != null && authDescCustom != null) { title = authTitleCustom; desc = authDescCustom; }
    return {
      title: title,
      info: desc
    }
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

  apiAuth = (apiAuthCustom) => {
    let api = 'Please, enter api.';
    (apiAuthCustom != null) ? api = apiAuthCustom : alert(api)
    return api;
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
    axios.post(this.apiAuth(this.props.apiAuth), data)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem(response.data.name, response.data.token);
          this.setState({ redirect: true });
        }
      })
      .catch(error => {
        this.setState({ error: error.response.data.message });
      });
  }

  signInUser = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    if (email === '' || password === '') {
      this.setState({ error: 'Please fill in all fields.' });
    } else {
      const data = { email: email, password: password }
      this.sendUserData(data);
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to='/' /> }
    const infoTitleBlock = this.titleContentRender(
      'Authentication title', 'Descriptions of Authentication',
      this.props.authTitleCustom, this.props.authDescCustom
    );
    return (
      <div className='auth-container'>
        <Grid container>
          <Grid xs={12} lg={6} item className='content-column'>
            <div className='title-container' style={this.bgRender(bgAuth, this.props.authBgCustom)}>
              <div className='img-part-cake-container'>
                <div className='img-part-cake' style={this.imgRender(part_cake_img, this.props.authTopImgCustom)} />
              </div>
              <div className='title'>
                <InfoTitleBlock infoBlock={infoTitleBlock} />
              </div>
              <div className='img-cake-container'>
                <div className='img-cake' style={this.imgRender(cake_img, this.props.authBotImgCustom)} />
              </div>
            </div>
          </Grid>
          <Grid xs={12} lg={6} item className='content-column'>
            <div className='info-container'>
              <div className='form-title'>Authorization</div>
              <div className='error-msg'>{this.state.error}</div>
              <form className='input-fields' onSubmit={this.signInUser}>
                <div className='field-title'>Email</div>
                <input
                  value={this.state.email}
                  onChange={this.emailChange}
                  type='text'
                />
                <div className='field-title'>Password</div>
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.passwordChange}
                />
                <Button
                  className='auth-button'
                  variant='contained'
                  type='submit'
                  color='secondary'
                >
                  SIGN IN
                </Button>
                <div className='login-link'>
                  <span>Don't have an account? </span>
                  <span className='link' onClick={this.regRenderFlag}>Register</span>
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

