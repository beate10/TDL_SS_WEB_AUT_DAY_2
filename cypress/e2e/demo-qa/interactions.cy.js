// import page objects

import SelectablePage from "../../pageObjects/SelectablePage";

context("Interactions", () => {
  context("Selectable", () => {
    // Create SelectablePage page object

    beforeEach(() => {
      SelectablePage.visit();
    });

    // Create scenario 1:
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active

    it ("Selectable Test Scenario 1", () => {
      SelectablePage.getField(0).click();
      SelectablePage.getField(0).should("have.class", "active");

      SelectablePage.getField(1).click();
      SelectablePage.getField(0).should("have.class", "active");
      SelectablePage.getField(1).should("have.class", "active");
      
    })

    it.only("Selectable Test Scenario 2", () =>{
      SelectablePage.gridButton.click();
  

      let rowValues = [[2,0], [3,1], [2,2], [1,1]];

      rowValues.forEach(value => {
        SelectablePage.getButton.apply(this, value).click();
      })


      rowValues.forEach(value => {
        SelectablePage.getButton.apply(this, value).should("have.class", "active");
      })



    })

    // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active
  });
});
