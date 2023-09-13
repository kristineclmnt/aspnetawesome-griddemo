import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import gridPO from '../pages/GridPage'

Then('the user searches for data in the Grid', (dataTable: any) => {
    const expectedData = dataTable.hashes()

    expectedData.forEach((rowData: any) => {
        gridPO.checkRow(rowData)
    })
})