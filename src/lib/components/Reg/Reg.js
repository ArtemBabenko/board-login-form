import React, { Component } from 'react';
import axios from 'axios';
import {
    REG_TITLE, REG_DESC, REG_COLOR_TITLE, REG_FORM_TITLE, REG_EMAIL_FIELD_TITLE, REG_USERNAME_FIELD_TITLE,
    REG_PASS_FIELD_TITLE, REG_CONFPASS_FIELD_TITLE, REG_FORM_COLOR_TITLE, REG_BTN_TEXT,
    REG_BTN_COLOR, REG_BTN_COLOR_TEXT, REG_HAVEACC_TEXT, REG_ENTERLINK_TEXT, FILL_ALL_FIELDS_ERR, VALID_EMAIL_ERR,
    VALID_PASS_CHAR_ERR, CONF_PASS_ERR, API_ERR
} from '../../services';
import Grid from '@material-ui/core/Grid';
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
        let title = regTitleCustom;
        let desc = regDescCustom;
        switch (true) {
            case title == null && desc == null:
                title = regTitleBasic;
                desc = regDescBasic;
                break;
            case title == null:
                title = regTitleBasic;
                break;
            case desc == null:
                desc = regDescBasic;
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

    apiReg = (apiRegCustom) => {
        let api = this.formTitleRender(API_ERR, this.props.regApiErr);
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
                    this.setState({ error: this.formTitleRender(VALID_EMAIL_ERR, this.props.regValidEmailErr) });
                    break;
                case this.validatePassword(password):
                    this.setState({ error: this.formTitleRender(VALID_PASS_CHAR_ERR, this.props.regValidPassCharErr) });
                    break;
                case password === pass_confirm:
                    this.setState({ error: this.formTitleRender(CONF_PASS_ERR, this.props.regConfPassErr) });
                    break;
                default:
                    const data = { email: email, name: name, password: password }
                    this.sendUserData(data);
            }
        } else {
            this.setState({ error: this.formTitleRender(FILL_ALL_FIELDS_ERR, this.props.regFillAllFieldsErr) });
        }
    }

    render() {
        const infoTitleBlock = this.titleContentRender(
            REG_TITLE, REG_DESC,
            this.props.regTitle, this.props.regDesc
        );
        return (
            <div className='registration-container'>
                <Grid container>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='title-container' style={this.bgRender(bgReg, this.props.regBg)}>
                            <div className='img-cake-container'>
                                <div className='img-cake' style={this.imgRender(cake_img, this.props.regTopImg)} />
                            </div>
                            <div className='title' style={this.titleColorRender(REG_COLOR_TITLE, this.props.regColorTitle)}>
                                <InfoTitleBlock infoBlock={infoTitleBlock} />
                            </div>
                            <div className='img-heart-cake-container'>
                                <div className='img-heart-cake' style={this.imgRender(cake_heart_img, this.props.regMidImg)} />
                            </div>
                            <div className='img-candy-container'>
                                <div className='img-candy' style={this.imgRender(candy_img, this.props.regBotImg)} />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='info-container' style={this.titleColorRender(REG_FORM_COLOR_TITLE, this.props.regFormColorTitle)}>
                            <div className='form-title'>{this.formTitleRender(REG_FORM_TITLE, this.props.regFormTitle)}</div>
                            <div className='error-msg'>{this.state.error}</div>
                            <form className='input-fields' onSubmit={this.signUpUser}>
                                <div className='field-title'>{this.formTitleRender(REG_EMAIL_FIELD_TITLE, this.props.regEmailFieldTitle)}</div>
                                <input
                                    value={this.state.email}
                                    onChange={this.emailChange}
                                    type='text' />
                                <div className='field-title'>{this.formTitleRender(REG_USERNAME_FIELD_TITLE, this.props.regUserNameFieldTitle)}</div>
                                <input
                                    value={this.state.name}
                                    onChange={this.userNameChange}
                                    type='text' />
                                <div className='field-title'>{this.formTitleRender(REG_PASS_FIELD_TITLE, this.props.regPassFieldTitle)}</div>
                                <input
                                    value={this.state.password}
                                    onChange={this.passwordChange}
                                    type='password' />
                                <div className='field-title'>{this.formTitleRender(REG_CONFPASS_FIELD_TITLE, this.props.regConfPassFieldTitle)}</div>
                                <input
                                    value={this.state.pass_confirm}
                                    onChange={this.passwordConfirm}
                                    type='password' />
                                <button
                                    className='reg-button'
                                    type='submit'
                                    style={this.btnColorRender(REG_BTN_COLOR, REG_BTN_COLOR_TEXT, this.props.regBtnColor, this.props.regBtnColorText)}>
                                    {this.formTitleRender(REG_BTN_TEXT, this.props.regBtnText)}
                                </button>
                                <div className='login-link'>
                                    <span>{this.formTitleRender(REG_HAVEACC_TEXT, this.props.regHaveAccText)}</span>
                                    <span className='link' onClick={this.authRenderFlag}>{this.formTitleRender(REG_ENTERLINK_TEXT, this.props.regEnterLinkText)}</span>
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