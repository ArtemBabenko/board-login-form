# board-login-form
A library of React components created using `create-react-app`. An alternative implementation of the login form. Includes registration, authorization, welcome page.

# Installation
Run the following command:
`npm install board-login-form`

# Usage
`import BoardLoginForm from './BoardLoginForm';`

In a class or function.

`<BoardLoginForm apiReg={API_REG} apiAuth={API_AUTH} />`

# Props options.

Important to use.

`apiReg` - API for registration.   

`apiRegErr` - Message path.

`apiRegUserName` - Data path.

`apiRegUserToken` - Data path.

`apiRegUserEmail` - Data path.` 

`apiRegUserPass` - Data path.

`apiAuth` - API for authentication.

`apiAuthErr` - Message path. 

`apiAuthUserName` - Data path. 

`apiAuthUserToken` - Data path.

Cosmetic props. Registration page.

`regTitle` - Title for registration. 

`regDesc` - Description for registration. 

`regColorTitle` - Sets the color of the title and description. 

`regBg` - Sets the background of the registration page.  

`regTopImg` - Sets the top image of the registration page. By setting `none`, you can disable the image.

`regMidImg` - Sets the middle image of the registration page. By setting `none`, you can disable the image.

`regBotImg` - Sets the bottom image of the registration page. By setting `none`, you can disable the image.

`regFormTitle` - Title for registration form.

`regEmailFieldTitle` - Title for the email field.

`regUserNameFieldTitle` - Title for the username field.

`regPassFieldTitle` - Title for password field.

`regConfPassFieldTitle` - Title for the password re-entry field.

`regFormColorTitle` - Sets the color of all registration form titles.

`regBtnText` - Sets the registration button text.

`regBtnColor` - Sets the color of the registration button.

`regBtnColorText` - Sets the text color of the registration button.

`regHaveAccText` - Info line text.

`regEnterLinkText` - Jump line text.

`regFillAllFieldsErr` - Error text, for empty fields in the registration form.

`regValidEmailErr` - Error text for invalid mail.

`regValidPassCharErr` - Error text for invalid password.

`regConfPassErr` - Error text when password re-entry does not match.

Cosmetic props. Authorization page.

`authTitle` - Title for authorization.

`authDesc` - Description for authorization.

`authColorTitle` - Sets the color of the title and description.

`authBg` - Sets the background of the authorization page.

`authTopImg` - Sets the top image of the authorization page. By setting `none`, you can disable the image.

`authBotImg` - Sets the bottom image of the authorization page. By setting `none`, you can disable the image.

`authFormTitle` - Title for authorization form.

`authEmailFieldTitle` - Title for the email field.

`authPassFieldTitle` - Title for password field.

`authFormColorTitle` - Sets the color of all authorization form titles.

`authBtnText` - Sets the authorization button text.

`authBtnColor` - Sets the color of the authorization button. 

`authBtnColorText` - Sets the text color of the authorization button.

`authDontHaveAccText` - Info line text.

`authRegLinkText` - Jump line text.

`authFillAllFieldsErr` - Error text, for empty fields in the authorization form.

Cosmetic props. Welcome page.

`wpTitle` - Title for Welcome Page.

`wpDesc` - Description for Welcome Page.

`wpColorTitle` - Sets the color of the title and description.

`wpBg` - Sets the background of the welcome page.

`wpTopImg` - Sets the top image of the welcome page. By setting `none`, you can disable the image.

`wpBotImg` - Sets the bottom image of the welcome page. By setting `none`, you can disable the image.

`wpProfileTitle` - User card title.

`wpUserMailFieldTitle` - Title for the email field.

`wpUserPassFieldTitle` - Title for password field.

`wpProfileColorTitle` - Sets the color of all headers in a user card

`wpBtnText` - Sets the button text.

`wpBtnColor` - Sets the color of the button. 

`wpBtnColorText` - Sets the text color of the button.

Examples.

`apiReg={'http://localhost:4001/signup'}` - Example for all api.

`apiRegErr={'data.message'}` - Example for all data path and message path.

`regTitle={'Registration in a seafood store'}` - Example for all title changes.

`regColorTitle={'#643f1c'}` - Example for all color changes.

`import RegBg from '../../Img/bg.png'; <BoardLoginForm regBg={RegBg} regTopImg={'none'}/>` - Example for all images.