// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
   it("visits the app root url", () => {
      cy.visit("/");
      cy.contains("Welcome to the Sano Frontend tes");
   });
});
