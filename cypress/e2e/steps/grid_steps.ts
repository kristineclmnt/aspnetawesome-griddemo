import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import gridPO from '../pages/GridPage'

Then('the user searches for data in the Grid', (dataTable: DataTable) => {
    // dataTable.hashes().forEach((row) => {

    // })

/////////////

    // let extractedData = [];
    // extractedData = dataTable.hashes().map((row) => ({
    //     id: row.Id,
    //     person: row.Person,
    //     food: row.Food,
    //     country: row.Country,
    //     date: row.Date,
    //     location: row.Location,
    //     chef: row.Chef
    // }))

    // gridPO.lookForIdValue(extractedData.map((row) => row.id))

///////////////

    dataTable.rows().forEach((row, index) => {
        // 'row' is an array containing the values of each column in the current row

        // Access specific columns by their index (0-based)
        const id = row[0]
        const person = row[1]
        const food = row[2]
        const country = row[3]
        const date = row[4]
        const location = row[5]
        const chef = row[6]

        // Now, you can work with the values from the current row
        // For example, you can log them, perform assertions, or use them in your test logic
        cy.log(`Row ${index + 1}: Id=${id}, Person=${person}, Food=${food}, ...`)

        gridPO.lookForIdValue(id)
    })

})