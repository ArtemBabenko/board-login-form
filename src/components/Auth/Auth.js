import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import { API_AUTH } from '../../services';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
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

  emailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };

  passwordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };

  sendUserData = (data) => {
    axios.post('http://95.217.222.157:4001/singin', data)
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
    const infoBlock = {
      title: 'Cайт объявлений',
      info: 'Легко купить, легко продать'
    }
    return (
        <div className='auth-container'>
        <Grid container>
          <Grid xs={12} lg={6} item className='content-column'>
            <div className='title-container'>
              <img className='img-cake' src={cake_img} alt="imgCake" />
              <img className='img-part-cake' src={part_cake_img} alt="imgPartCake" />
              <div className='title'>
                {/* <InfoTitleBlock infoBlock={infoBlock} /> */}
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
              </form>
            </div>
          </Grid>
        </Grid>
      </div >
    )
  }
}

export default Auth;

