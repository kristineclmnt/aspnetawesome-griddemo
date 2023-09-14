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

    checkRow(rowData: any) {
        const { Id, Person, Food, Country, Date, Location, Chef } = rowData;

        this.el.grid()
            .contains("td", Id)
            .parent("tr")
            .should("contain", Person)
            .should("contain", Food)
            .should("contain", Country)
            .should("contain", Date)
            .should("contain", Location)
            .should("contain", Chef);
    }

}
const gridPO = new GridPage()
export default gridPO