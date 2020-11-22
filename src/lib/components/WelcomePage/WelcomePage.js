import React, { Component } from 'react';
import {
    WP_TITLE, WP_DESC, WP_COLOR_TITLE, WP_PROFILE_TITLE, WP_USERMAIL_FIELD_TITLE,
    WP_USERPASS_FIELD_TITLE, WP_PROFILE_COLOR_TITLE, WP_BTN_TEXT, WP_BTN_COLOR, WP_BTN_COLOR_TEXT
} from '../../services';
import { NavLink } from 'react-router-dom';
import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
import Grid from '@material-ui/core/Grid';
import bgWp from '../../img/bg.png';
import cake_img from '../../img/welcome-page-cake.png';
import salute_img from '../../img/welcome-page-salute.png';
import './welcome_page.scss';


class WelcomePage extends Component {

    titleContentRender = (wpTitleBasic, wpDescBasic, wpTitleCustom, wpDescCustom) => {
        let title = wpTitleCustom;
        let desc = wpDescCustom;
        switch (true) {
            case title == null && desc == null:
                title = wpTitleBasic;
                desc = wpDescBasic;
                break;
            case title == null:
                title = wpTitleBasic;
                break;
            case desc == null:
                desc = wpDescBasic;
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

    bgRender = (wpBgBasic, wpBgCustom) => {
        let bg = wpBgBasic;
        if (wpBgCustom != null) bg = wpBgCustom;
        return {
            background: `url(${bg})`
        };
    }

    imgRender = (wpImgBasic, wpImgCustom) => {
        let img = wpImgBasic;
        if (wpImgCustom != null) {
            switch (wpImgCustom === 'none') {
                case true:
                    img = null;
                    break;
                case false:
                    img = wpImgCustom
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

    render() {
        const infoTitleBlock = this.titleContentRender(
            WP_TITLE, WP_DESC,
            this.props.wpTitle, this.props.wpDesc
        );
        return (
            <div className='welcome-page-container'>
                <Grid container>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='title-container' style={this.bgRender(bgWp, this.props.wpBg)}>
                            <div className='img-salute-container'>
                                <div className='img-salute' style={this.imgRender(salute_img, this.props.wpTopImg)} />
                            </div>
                            <div className='title' style={this.titleColorRender(WP_COLOR_TITLE, this.props.wpColorTitle)}>
                                <InfoTitleBlock infoBlock={infoTitleBlock} />
                            </div>
                            <div className='img-cake-container'>
                                <div className='img-cake' style={this.imgRender(cake_img, this.props.wpBotImg)} />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='info-container' style={this.titleColorRender(WP_PROFILE_COLOR_TITLE, this.props.wpProfileColorTitle)}>
                            <div className='form-title'>{this.formTitleRender(WP_PROFILE_TITLE, this.props.wpProfileTitle)}</div>
                            <div className='result-fields'>
                                <div className='field-title'>{this.formTitleRender(WP_USERMAIL_FIELD_TITLE, this.props.wpUserMailFieldTitle)}</div>
                                <div className='user-result-field'>{this.props.wpUserEmail}</div>
                                <div className='field-title'>{this.formTitleRender(WP_USERPASS_FIELD_TITLE, this.props.wpUserPassFieldTitle)}</div>
                                <div className='user-result-field'>{this.props.wpUserPass}</div>
                                <NavLink className='link' to='/'>
                                    <button
                                        className='welcome-button'
                                        type='submit'
                                        style={this.btnColorRender(WP_BTN_COLOR, WP_BTN_COLOR_TEXT, this.props.wpBtnColor, this.props.wpBtnColorText)}>
                                        {this.formTitleRender(WP_BTN_TEXT, this.props.wpBtnText)}
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default WelcomePage;