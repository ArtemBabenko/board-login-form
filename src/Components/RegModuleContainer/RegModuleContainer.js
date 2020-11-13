import React from 'react';
import {
    API_REG, REG_TITLE, REG_DESC, REG_COLOR_TITLE, REG_FORM_TITLE,
    REG_EMAIL_FIELD_TITLE, REG_USERNAME_FIELD_TITLE, REG_PASS_FIELD_TITLE,
    REG_CONFPASS_FIELD_TITLE, REG_FORM_COLOR_TITLE, REG_BTN_TEXT, REG_BTN_COLOR,
    REG_BTN_COLOR_TEXT, REG_HAVEACC_TEXT, REG_ENTERLINK_TEXT, FILL_ALL_FIELDS_ERR,
    VALID_EMAIL_ERR, VALID_PASS_CHAR_ERR, CONF_PASS_ERR, API_ERR,
    API_AUTH, AUTH_TITLE, AUTH_DESC, WP_TITLE, WP_DESC
} from '../../services';
import RegBg from '../../Img/bg.png';
import RegTopImg from '../../Img/shrimp-icon.png';
import RegMidImg from '../../Img/shrimp-icon.png';
import RegBotImg from '../../Img/shrimp-icon.png';
import BoardLoginForm from '../../lib/BoardLoginForm';



function RegModuleContainer() {
    return (
        <div>
            <BoardLoginForm
                // apiReg={null}
                regTitle={REG_TITLE}
                regDesc={REG_DESC}
                regColorTitle={REG_COLOR_TITLE}
                regBg={RegBg}
                regTopImg={RegTopImg}
                regMidImg={RegMidImg}
                regBotImg={'none'}
                regFormTitle={REG_FORM_TITLE}
                regEmailFieldTitle={REG_EMAIL_FIELD_TITLE}
                regUserNameFieldTitle={REG_USERNAME_FIELD_TITLE}
                regPassFieldTitle={REG_PASS_FIELD_TITLE}
                regConfPassFieldTitle={REG_CONFPASS_FIELD_TITLE}
                regFormColorTitle={REG_FORM_COLOR_TITLE}
                regBtnText={REG_BTN_TEXT}
                regBtnColor={REG_BTN_COLOR}
                regBtnColorText={REG_BTN_COLOR_TEXT}
                regHaveAccText={REG_HAVEACC_TEXT}
                regEnterLinkText={REG_ENTERLINK_TEXT}
                regFillAllFieldsErr={FILL_ALL_FIELDS_ERR}
                regValidEmailErr={VALID_EMAIL_ERR}
                regValidPassCharErr={VALID_PASS_CHAR_ERR}
                regConfPassErr={CONF_PASS_ERR}
                regApiErr={API_ERR}
                //auth
                apiAuth={API_AUTH}
                authTitle={AUTH_TITLE}
                authDesc={AUTH_DESC}
                authBg={RegBg}
                authTopImg={RegTopImg}
                authBotImg={RegBotImg}
                //wp
                wpBg={RegBg}
                wpTitle={WP_TITLE}
                wpDesc={WP_DESC}
                wpTopImg={RegTopImg}
                wpBotImg={RegBotImg}
            />
        </div>
    );
}

export default RegModuleContainer;
