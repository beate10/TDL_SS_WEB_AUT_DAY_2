import BasePage from "./basePage";

class ButtonsPage extends BasePage{

    static get url(){
        return "/buttons";
    }

    static get doubleClickButton(){
        return cy.get('#doubleClickBtn');
    }

    static get rightClickButton(){
        return cy.get('#rightClickBtn');
    }

    static get clickMeButton(){
        return cy.get('[type="button"]').eq(3);
    }


    static get doubleMessage(){
        return cy.get('#doubleClickMessage');
    }

    static get rightClickMessage(){
        return cy.get('#rightClickMessage');
    }

    static get dynamicClickMessage(){
        return cy.get('#dynamicClickMessage');
    }

    


}



export default ButtonsPage;