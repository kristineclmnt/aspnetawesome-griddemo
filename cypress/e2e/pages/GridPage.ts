class GridPage {
    el = {
        grid: () => cy.get('#Grid1'),
        gridFooter: () => cy.get('.awe-footer'),
        pageSizeButton: () => cy.get('#Grid1PageSize-awed'),
        pageSizeDropdownMenu: () => cy.get('#Grid1PageSize-dropmenu'),
        firstPageNumberButton: () => cy.get('button[data-p="1"]'),
        pageNumberButton: () => cy.get('.awe-pager-btn')
    }

    filterNumberOfItemsBy(numOfItems: string) {
        this.el.pageSizeButton().click()
        this.el.pageSizeDropdownMenu().children().find('li').contains(numOfItems).click()
    }

    lookForIdValue(id: string) {
        this.el.grid().scrollIntoView()
        this.el.firstPageNumberButton().click()
        this.el.grid().children().find('tr').contains(id).should('exist').then((row) => {
            let tdTextValues: string[] = []

            row.find('td').each((index, td) => {
                tdTextValues.push(Cypress.$(td).text().trim());
            });

            cy.log('TD Text Values:', tdTextValues);
            cy.wrap(tdTextValues).as('rowValues')
        })
    }

    clickPageAndCheckForId(id: string, currentPage: number, lastPage: number) {
        this.el.pageNumberButton().contains(currentPage.toString()).click();

        this.el.grid().children().find('tr').contains(id).should('exist').then((row) => {
            if (row.length === 0) {
                if (currentPage < lastPage) {
                    this.clickPageAndCheckForId.call(this, id, currentPage + 1, lastPage)
                }
            }
        })
    }

}
const gridPO = new GridPage()
export default gridPO