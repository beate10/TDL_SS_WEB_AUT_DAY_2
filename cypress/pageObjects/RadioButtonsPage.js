import BasePage from "./basePage";



class RadioButtonsPage extends BasePage {

    static get url(){
        return  "/radio-button";
    }

    static get yesButton(){
        return cy.get('[for="yesRadio"]');
    }

    static get message(){
        return cy.get('[class="mt-3"]');
    }

    static get impressiveButton(){
        return cy.get('[for="impressiveRadio"]');
    }


    static get noButton(){
        return cy.get('#noRadio');
    }

    //[for="noRadio"]
    

}


export default RadioButtonsPage;