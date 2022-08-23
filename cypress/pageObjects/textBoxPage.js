import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get xxx() {
    return cy.get("xxx");
  }

  static get nameField() {
    return cy.get('[placeholder="Full Name"]');
  }

  static get emailField() {
    return cy.get('[placeholder="name@example.com"]');
  }

  static get currentAddressField() {
    return cy.get('[placeholder="Current Address"]');
  }


  static get permanentAddressField() {
    return cy.get('[id="permanentAddress"]');
  }

  static get submitButton() {
    return cy.get('#submit');
  }

  static get nameDisplay() {
    return cy.get('#name');
  }

  static get emailDisplay() {
    return cy.get('#email');
  }

  static get currentAddressDisplay() {
    return cy.get('[id = "currentAddress"][class = "mb-1"]');
  }

  static get permanentAddressDisplay() {
    return cy.get('[id = "permanentAddress"][class = "mb-1"]');
  }

  
  

}

export default TextBoxPage;
