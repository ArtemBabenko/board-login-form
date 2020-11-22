import React from 'react';
import {
    API_REG, API_REG_ERR, API_REG_USER_NAME, API_REG_USER_TOKEN, API_REG_USER_EMAIL, API_REG_USER_PASS,
    REG_TITLE, REG_DESC, REG_COLOR_TITLE, REG_FORM_TITLE,
    REG_EMAIL_FIELD_TITLE, REG_USERNAME_FIELD_TITLE, REG_PASS_FIELD_TITLE,
    REG_CONFPASS_FIELD_TITLE, REG_FORM_COLOR_TITLE, REG_BTN_TEXT, REG_BTN_COLOR,
    REG_BTN_COLOR_TEXT, REG_HAVEACC_TEXT, REG_ENTERLINK_TEXT, FILL_ALL_FIELDS_ERR,
    VALID_EMAIL_ERR, VALID_PASS_CHAR_ERR, CONF_PASS_ERR, 
    API_AUTH, API_AUTH_ERR, API_AUTH_USER_NAME, API_AUTH_USER_TOKEN, AUTH_TITLE, 
    AUTH_DESC, AUTH_COLOR_TITLE, AUTH_FORM_TITLE, AUTH_EMAIL_FIELD_TITLE, 
    AUTH_PASS_FIELD_TITLE, AUTH_FORM_COLOR_TITLE, AUTH_BTN_TEXT, AUTH_BTN_COLOR, 
    AUTH_BTN_COLOR_TEXT, AUTH_DONTHAVEACC_TEXT, AUTH_REGLINK_TEXT,
    WP_TITLE, WP_DESC, WP_COLOR_TITLE, WP_PROFILE_TITLE, WP_USERMAIL_FIELD_TITLE, 
    WP_USERPASS_FIELD_TITLE, WP_PROFILE_COLOR_TITLE, WP_BTN_TEXT, WP_BTN_COLOR, WP_BTN_COLOR_TEXT
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
                //Reg
                apiReg={API_REG}
                apiRegErr={API_REG_ERR}
                apiRegUserName={API_REG_USER_NAME}
                apiRegUserToken={API_REG_USER_TOKEN}
                apiRegUserEmail={API_REG_USER_EMAIL}
                apiRegUserPass={API_REG_USER_PASS}
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
                //Auth
                apiAuth={API_AUTH}
                apiAuthErr={API_AUTH_ERR}
                apiAuthUserName={API_AUTH_USER_NAME}
                apiAuthUserToken={API_AUTH_USER_TOKEN}
                authTitle={AUTH_TITLE}
                authDesc={AUTH_DESC}
                authColorTitle={AUTH_COLOR_TITLE}
                authBg={RegBg}
                authTopImg={RegTopImg}
                authBotImg={RegBotImg}
                authFormTitle={AUTH_FORM_TITLE}
                authEmailFieldTitle={AUTH_EMAIL_FIELD_TITLE}
                authPassFieldTitle={AUTH_PASS_FIELD_TITLE}
                authFormColorTitle={AUTH_FORM_COLOR_TITLE}
                authBtnText={AUTH_BTN_TEXT}
                authBtnColor={AUTH_BTN_COLOR}
                authBtnColorText={AUTH_BTN_COLOR_TEXT}
                authDontHaveAccText={AUTH_DONTHAVEACC_TEXT}
                authRegLinkText={AUTH_REGLINK_TEXT}
                authFillAllFieldsErr={FILL_ALL_FIELDS_ERR}
                //WP
                wpTitle={WP_TITLE}
                wpDesc={WP_DESC}
                wpColorTitle={WP_COLOR_TITLE}
                wpBg={RegBg}
                wpTopImg={RegTopImg}
                wpBotImg={RegBotImg}
                wpProfileTitle={WP_PROFILE_TITLE}
                wpUserMailFieldTitle={WP_USERMAIL_FIELD_TITLE}
                wpUserPassFieldTitle={WP_USERPASS_FIELD_TITLE}
                wpProfileColorTitle={WP_PROFILE_COLOR_TITLE}
                wpBtnText={WP_BTN_TEXT}
                wpBtnColor={WP_BTN_COLOR}
                wpBtnColorText={WP_BTN_COLOR_TEXT}
            />
        </div>
    );
}

export default RegModuleContainer;
