import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import bgWp from '../../img/bg.png';
import cake_img from '../../img/welcome-page-cake.png';
import salute_img from '../../img/welcome-page-salute.png';
import './welcome_page.scss';


class WelcomePage extends Component {
    
    titleContentRender = (welTitleBasic, welDescBasic, welTitleCustom, welDescCustom) => {
        let title = welTitleBasic;
        let desc = welDescBasic;
        if (welTitleCustom != null && welDescCustom != null) { title = welTitleCustom; desc = welDescCustom; }
        return {
            title: title,
            info: desc
        }
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

    render() {
        const infoTitleBlock = this.titleContentRender(
            'WelcomePage title', 'Descriptions of WelcomePage',
            this.props.wpTitleCustom, this.props.wpDescCustom
        );
        return (
            <div className='welcome-page-container'>
                <Grid container>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='title-container' style={this.bgRender(bgWp, this.props.wpBgCustom)}>
                            <div className='img-salute-container'>
                                <div className='img-salute' style={this.imgRender(salute_img, this.props.wpTopImgCustom)} />
                            </div>
                            <div className='title'>
                                <InfoTitleBlock infoBlock={infoTitleBlock} />
                            </div>
                            <div className='img-cake-container'>
                                <div className='img-cake' style={this.imgRender(cake_img, this.props.wpBotImgCustom)} />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='info-container'>
                            <div className='form-title'>User Profile Information</div>
                            <div className='result-fields'>
                                <div className='field-title'>User Email</div>
                                <div className='user-result-field'>{this.props.email}</div>
                                <div className='field-title'>User Password</div>
                                <div className='user-result-field'>{this.props.password}</div>
                                <NavLink className='link' to='/'>
                                    <Button
                                        className='welcome-button'
                                        variant='contained'
                                        type='submit'
                                        color='secondary'
                                        >
                                        Leave the page
                                    </Button>
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