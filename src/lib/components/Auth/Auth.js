import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
import cake_img from '../../img/auth-cake.png';
import part_cake_img from '../../img/auth-part-cake.png';
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
    axios.post(this.props.apiAuth, data)
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
      this.setState({ error: 'Пожалуйста, заполните все поля.' });
    } else {
      const data = { email: email, password: password }
      this.sendUserData(data);
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to='/' /> }
    const infoTitleBlock = {
      title: this.props.authTitle,
      info: this.props.authDesc
    }
    return (
      <div className='auth-container'>
        <Grid container>
          <Grid xs={12} lg={6} item className='content-column'>
            <div className='title-container'>
              <div className='img-part-cake-container'>
                <img className='img-part-cake' src={part_cake_img} alt="imgPartCake" />
              </div>
              <div className='title'>
                <InfoTitleBlock infoBlock={infoTitleBlock} />
              </div>
              <div className='img-cake-container'>
                <img className='img-cake' src={cake_img} alt="imgCake" />
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
                  <span>Нет учетной записи? </span>
                  <span className='link' onClick={this.regRenderFlag} >Зарегистрируйтесь</span>
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

