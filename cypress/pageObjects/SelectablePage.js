import BasePage from "./basePage";

class SelectablePage extends BasePage{

    static get url() {

        return "/selectable";
    }

    static getField(id) {
        return cy.get('#verticalListContainer> li').eq(id);
    }


    static get gridButton() {
        return cy.get('#demo-tab-grid');
    }

    static getButton(row, id) {
        return cy.get(`#row${row} > li`).eq(id);
    }
}

export default SelectablePage;