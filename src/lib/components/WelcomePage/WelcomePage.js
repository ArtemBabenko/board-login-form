import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InfoTitleBlock from '../InfoTitleBlock/InfoTitleBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CakeImg from '../../img/welcome-page-cake.png';
import SaluteImg from '../../img/welcome-page-salute.png';
import './welcome_page.scss';


class WelcomePage extends Component {


    render() {
        const infoBlock = {
            title: 'Cайт объявлений',
            info: 'Легко купить, легко продать'
        }
        return (
            <div className='welcome-page-container'>
                <Grid container>
                    <Grid xs={12} lg={6} item className='content-column'>
                        <div className='title-container'>
                            <div className='img-salute-container'>
                                <img className='img-salute' src={SaluteImg} alt="imgSalute" />
                            </div>
                            <div className='title'>
                                <InfoTitleBlock infoBlock={infoBlock} />
                            </div>
                            <div className='img-cake-container'>
                                <img className='img-cake' src={CakeImg} alt="imgCake" />
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
                                        color='secondary'>
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