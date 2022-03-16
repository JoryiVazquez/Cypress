/// <reference types="cypress" />

export default class CssSelectors {

    static loginPage(webElement){

        switch(webElement){

            case 'BtnIniciarSesion':        return cy.get('ul._3XsmI a[href="/users/showlogin"]');
            case 'TxbUserName':             return cy.get('#email');
            case 'TxbPAssword':             return cy.get('#password');
            case 'BtnLogin':                return cy.get('button.submit_btn');     
            case 'LbToday':                 return cy.get('span.simple_content',{timeout:5000})       

        }

    }

}