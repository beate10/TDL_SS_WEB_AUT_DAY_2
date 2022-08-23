import BasePage from "./basePage";

class CheckBoxPage extends BasePage{

    static get url(){
        return "/checkbox";
    }

    static get expandButton() {
        return cy.get('[title="Expand all"]');
    }

    static get notesSelection() {
        return cy.get('[for="tree-node-notes"]');
    }

    static get reactSelection() {
        return cy.get('[for="tree-node-react"]');
    }



    static get angularSelection() {
        return cy.get('[for="tree-node-angular"]');
    }

    static get generalSelection() {
        return cy.get('[for="tree-node-general"]');
    }

    static get excelSelection() {
        return cy.get('[for="tree-node-excelFile"]');
    }


    static get result(){
        return cy.get('#result');
    }


    

    
}


export default CheckBoxPage;