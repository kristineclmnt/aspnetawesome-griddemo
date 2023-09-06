import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import gridPO from '../pages/GridPage'

Given('the user opens the aspnetawesome site', () => {
    cy.visit('/')
})

When('the user filters the Grid to display {string} items', (numOfItems: string) => {
    gridPO.filterNumberOfItemsBy(numOfItems)
})