/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage  from '../Pages/LoginPage'


Given('The portal Todoist',()=>{

  cy.visit(Cypress.env('baseURL'))

})

When('Username and Password are introduced',()=>{

  cy.fixture('example.json').then((data)=>{

    cy.log(data.userName)

    cy.log(data.password)

    LoginPage.insertData(data.userName,data.password)

  
  })

  

})

Then('The customer can login',()=>{

  LoginPage.ValidateLogin()

})
