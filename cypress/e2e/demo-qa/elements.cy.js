import ButtonsPage from "../../pageObjects/ButtonsPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      // add the necessary steps
      TextBoxPage.nameField.type("Kim Kardashian");
      TextBoxPage.emailField.type("kim@kardashian.com");
      TextBoxPage.currentAddressField.type("Kr.Valdemara iela 8");
      TextBoxPage.permanentAddressField.type("Hollywood");
      TextBoxPage.submitButton.click();
      TextBoxPage.nameDisplay.should("contain", "Kim Kardashian");
      TextBoxPage.emailDisplay.should("contain", "kim@kardashian.com");
      TextBoxPage.currentAddressDisplay.should("contain", "Kr.Valdemara iela 8");
      TextBoxPage.permanentAddressDisplay.should("contain", "Hollywood");
    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it ("Testing Check Boxes Scenario 1" , () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.notesSelection.click();
      CheckBoxPage.reactSelection.click();
      CheckBoxPage.angularSelection.click();
      CheckBoxPage.generalSelection.click();
      CheckBoxPage.excelSelection.click();

      ["notes", "react","angular", "general", "excelFile"].forEach (selection =>{
        CheckBoxPage.result.should("contain", selection);
      })
      

    })
    


    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes


    it ("Testing Check Boxes Scenario 2" , () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.officeSelection.click();

      ["office", "public","private", "classified", "general"].forEach (selection =>{
        CheckBoxPage.result.should("contain", selection);
      })
    });


  });

  context("Radio button scenarios", () => {

    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled


    it ("Radio Button Test", () => {
      RadioButtonsPage.yesButton.click();
      RadioButtonsPage.message.should("contain", "Yes");

      RadioButtonsPage.impressiveButton.click();
      RadioButtonsPage.message.should("contain", "Impressive");

      RadioButtonsPage.noButton.should("to.exist");
      RadioButtonsPage.noButton.should("be.disabled");
    })
  });

  context("Web tables scenarios", () => {


    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Web Tables Test Scenario 1", () => {

      // Create WebTables page object
      // Create scenario 1:
      // Click add record button
      // fill in the necessary information
      // click submit button
      // search for the user based on previously added information
      // validate tha the user is visible

      WebTablesPage.addButton.click();
      WebTablesPage.firstNameField.type("Kristaps");
      WebTablesPage.lastNameField.type("Porzingis");
      WebTablesPage.emailField.type("kpee@nba.com");
      WebTablesPage.ageField.type(26);
      WebTablesPage.salaryField.type(10000000);
      WebTablesPage.departmentField.type("Basketball");

      WebTablesPage.submitButton.click();
      WebTablesPage.searchBox.type("Kristaps");

      WebTablesPage.firstRow.should("be.visible", "Kristaps");

    });


    it("Web Tables Test Scenario 2", () => {
      // Create Scenario 2:
      // Delete all table rows
      // Validate that we see text - No rows found


      WebTablesPage.deleteRows.each((val, id, coll) => {
        WebTablesPage.getDeleteButton(id+1).click();
      });


      WebTablesPage.messageBar.should("contain", "No rows found");
    

    
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message

    beforeEach(() => {
      ButtonsPage.visit();
    });

    it.only("Buttons test", () => {
      ButtonsPage.doubleClickButton.dblclick();
      ButtonsPage.doubleMessage.should("have.text", "You have done a double click");
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.rightClickMessage.should("have.text", "You have done a right click");
      ButtonsPage.clickMeButton.click();
      ButtonsPage.dynamicClickMessage.should("have.text", "You have done a dynamic click");
    })
  });

});


});
