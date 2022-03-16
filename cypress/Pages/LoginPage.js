
import CssSelectors from '../support/selectorsCSS'

class LoginPage extends CssSelectors {

    //userName = 'ul._3XsmI a[href="/users/showlogin"]'

    insertData(userName,password){

        CssSelectors.loginPage('BtnIniciarSesion').click()

        CssSelectors.loginPage('TxbUserName').clear().type(userName)

        CssSelectors.loginPage('TxbPAssword').clear().type(password)

        CssSelectors.loginPage('BtnLogin').click()

    }

    ValidateLogin(){

        CssSelectors.loginPage('LbToday').should('have.text','Today')

    }



}

export default new LoginPage