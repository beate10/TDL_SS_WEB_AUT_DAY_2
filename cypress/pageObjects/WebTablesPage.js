import BasePage from "./basePage";

class WebTablesPage extends BasePage{

    static get url(){
        return "/webtables";
    }

    static get addButton(){
        return cy.get('#addNewRecordButton');
    }

    static get firstNameField(){
        return cy.get('#firstName');
    }


    static get lastNameField(){
        return cy.get('#lastName');
    }


    static get emailField(){
        return cy.get('#userEmail');
    }

    static get ageField(){
        return cy.get('#age');
    }

    static get salaryField(){
        return cy.get('#salary');
    }

    static get departmentField(){
        return cy.get('#department');
    }


    static get submitButton(){
        return cy.get('#submit');
    }


    static get searchBox(){
        return cy.get('#searchBox');
    }


    static get deleteRows(){
        return cy.get('[title="Delete"]');
    }

    static get tableRows(){
        return cy.get('.rt-tr-group');
    }


    static get firstRow(){
        return this.tableRows.eq(0);

    }


    static getDeleteButton(id){
        return cy.get(`#delete-record-${id}`);
    }

    static get messageBar(){
        return cy.get('.rt-noData');
    }


   

}


export default WebTablesPage;