import React from 'react';
import { API_REG, API_AUTH, REG_TITLE, REG_DESC, AUTH_TITLE, AUTH_DESC, WP_TITLE, WP_DESC } from '../../services';
import RegBgCustom from '../../Img/bg.png';
import RegTopImgCustom from '../../Img/shrimp-icon.png';
import RegMidImgCustom from '../../Img/shrimp-icon.png';
import RegBotImgCustom from '../../Img/shrimp-icon.png';
import BoardLoginForm from '../../lib/BoardLoginForm';



function RegModuleContainer() {
    return (
        <div>
            <BoardLoginForm
                apiReg={API_REG}
                regTitleCustom={REG_TITLE}
                regDescCustom={REG_DESC}
                regBgCustom={RegBgCustom}
                regTopImgCustom={RegTopImgCustom}
                regMidImgCustom={RegMidImgCustom}
                regBotImgCustom={'none'}
                apiAuth={API_AUTH}
                // authTitleCustom={AUTH_TITLE}
                // authDescCustom={AUTH_DESC}
                // authBgCustom={RegBgCustom}
                // authTopImgCustom={RegTopImgCustom}
                // authBotImgCustom={RegBotImgCustom}
                // wpBgCustom={RegBgCustom}
                // wpTitleCustom={WP_TITLE}
                // wpDescCustom={WP_DESC}
                // wpTopImgCustom={RegTopImgCustom}
                // wpBotImgCustom={RegBotImgCustom}
            />
        </div>
    );
}

export default RegModuleContainer;
