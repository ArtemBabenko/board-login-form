import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
import bgReg from '../../img/bg.png';
import cake_img from '../../img/registration-cake.png';
import cake_heart_img from '../../img/registration-cake2.png';
import candy_img from '../../img/registration-candy.png';
import './reg.scss';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            pass_confirm: '',
            error: ''
        }
    }

    titleContentRender = (regTitleBasic, regDescBasic, regTitleCustom, regDescCustom) => {
        let title = regTitleBasic;
        let desc = regDescBasic;
        if (regTitleCustom != null && regDescCustom != null) { title = regTitleCustom; desc = regDescCustom; }
        return {
            title: title,
            info: desc
        }
    }

    bgRender = (regBgBasic, regBgCustom) => {
        let bg = regBgBasic;
        if (regBgCustom != null) bg = regBgCustom;
        return {
            background: `url(${bg})`
        };
    }

    imgRender = (regImgBasic, regImgCustom) => {
        let img = regImgBasic;
        if (regImgCustom != null) {
            switch (regImgCustom === 'none') {
                case true:
                    img = null;
                    break;
                case false:
                    img = regImgCustom
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

    apiReg = (apiRegCustom) => {
       let api = 'Please enter api';
       (apiRegCustom != null) ? api = apiRegCustom : alert(api)
       return api;
    }

    authRenderFlag = () => {
        this.props.authRenderFlag(true);
    }

    welcomeRenderFlag = () => {
        this.props.welcomeRenderFlag(true);
    }

    emailChange = (e) => {
        const email = e.target.value;
        this.setState({ email });
    }

    userNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name });
    }

    passwordChange = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }

    passwordConfirm = (e) => {
        const pass_confirm = e.target.value;
        this.setState({ pass_confirm });
    }

    validateEmail = (email) => {
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    validatePassword = (password) => {
        const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return reg.test(password);
    }

    sendUserData = (data) => {
        axios.post(this.apiReg(this.props.apiReg), data)
            .then(response => {
                if (response.status === 201) {
                    // localStorage.setItem(response.data.name, response.data.token);
                    this.welcomeRenderFlag();
                }
            })
            .catch(error => {
                // this.setState({ error: error.response.data.message });
            });
    }

    signUpUser = (e) => {
        e.preventDefault();
        let { email, name, password, pass_confirm } = this.state;
        if (email !== '' && name !== '' && password !== '' && pass_confirm !== '') {
            switch (false) {
                case this.validateEmail(email):
                    this.setState({ error: 'Пожалуйста, введите корректный e-mail.' });
                    break;
                case this.validatePassword(password):
                    this.setState({ error: 'Пароль должен содержать от 8 буквенно-цифровых символов.' });
                    break;
                case password === pass_confirm:
                    this.setState({ error: 'Пароли не совпадают.' });
                    break;
                default:
                    const data = { email: email, name: name, password: password }
                    this.sendUserData(data);
            }
        } else {
            this.setState({ error: 'Пожалуйста, заполните все поля.' });
        }
    }

    render() {
        const infoTitleBlock = this.titleContentRender(
            'Registration title', 'Descriptions of Registration',
            this.props.regTitleCustom, this.props.regDescCustom
        );
        return (
            <div className='registration-container'>
                <Grid container>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='title-container' style={this.bgRender(bgReg, this.props.regBgCustom)}>
                            <div className='img-cake-container'>
                                <div className='img-cake' style={this.imgRender(cake_img, this.props.regTopImgCustom)} />
                            </div>
                            <div className='title'>
                                <InfoTitleBlock infoBlock={infoTitleBlock} />
                            </div>
                            <div className='img-heart-cake-container'>
                                <div className='img-heart-cake' style={this.imgRender(cake_heart_img, this.props.regMidImgCustom)} />
                            </div>
                            <div className='img-candy-container'>
                                <div className='img-candy' style={this.imgRender(candy_img, this.props.regBotImgCustom)} />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='info-container'>
                            <div className='form-title'>Registration</div>
                            <div className='error-msg'>{this.state.error}</div>
                            <form className='input-fields' onSubmit={this.signUpUser}>
                                <div className='field-title'>Email</div>
                                <input
                                    value={this.state.email}
                                    onChange={this.emailChange}
                                    type='text' />
                                <div className='field-title'>User Name</div>
                                <input
                                    value={this.state.name}
                                    onChange={this.userNameChange}
                                    type='text' />
                                <div className='field-title'>Password</div>
                                <input
                                    value={this.state.password}
                                    onChange={this.passwordChange}
                                    type='password' />
                                <div className='field-title'>Confirm Password</div>
                                <input
                                    value={this.state.pass_confirm}
                                    onChange={this.passwordConfirm}
                                    type='password' />
                                <Button
                                    className='reg-button'
                                    variant='contained'
                                    type='submit'
                                    color='secondary'
                                >
                                    SIGN UP
                                </Button>
                                <div className='login-link'>
                                    <span>У вас есть аккаунт? </span>
                                    <span className='link' onClick={this.authRenderFlag}>Войти</span>
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default Registration;