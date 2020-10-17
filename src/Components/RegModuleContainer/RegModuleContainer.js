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
                apiAuth={API_AUTH}
                regTitleCustom={REG_TITLE}
                regDescCustom={REG_DESC}
                regBgCustom={RegBgCustom}
                regTopImgCustom={RegTopImgCustom}
                regMidImgCustom={RegMidImgCustom}
                regBotImgCustom={RegBotImgCustom}
                authTitle={AUTH_TITLE}
                authDesc={AUTH_DESC}
                wpTitle={WP_TITLE}
                wpDesc={WP_DESC} />
        </div>
    );
}

export default RegModuleContainer;
