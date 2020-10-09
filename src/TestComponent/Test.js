import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InfoTitleBlock from '../lib/components/InfoTitleBlock/InfoTitleBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './test.scss';


class Test extends Component {
    render() {
        const infoBlock = {
            title: 'test',
            info: 'test'
        }
        return (
            <div className='test-button-container'>
                <NavLink className='link' to='/regmodule'>
                    <Button
                        className='test-button'
                        variant='contained'
                        type='submit'
                        color='secondary'>
                        Registration
                    </Button>
                </NavLink>
            </div >
        )
    }
}

export default Test;