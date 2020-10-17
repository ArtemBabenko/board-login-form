import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './test_home_page.scss';


class TestHomePage extends Component {
    render() {
        return (
            <div>
                <div className='home-header'>
                    <div className='home-logo-container'>
                        <span className='logo'>Logo</span>
                    </div>
                    <div className='home-button-container'>
                        <NavLink className='link' to='/regmodule'>
                            <Button
                                className='test-button'
                                variant='contained'
                                type='submit'
                                color='secondary'>
                                Registration
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className='home-title'>
                    Home Page
                </div>
            </div>
        )
    }
}

export default TestHomePage;