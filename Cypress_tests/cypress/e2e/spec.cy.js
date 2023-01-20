describe('visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})


/*it("Test dat je naar de homepagina gaat en die goed wordt uitgevoerd.", () => {
  cy.visit('http://localhost:3000/');
  cy.url().contains("/homepagina");
});*/

  it('gives an OK for homepagina request', () => {
    cy.intercept({
      method: 'GET',
      statusCode:200,
      }).as('request');
      cy.wait('@request').then((interception) => {
      assert.deepEqual(interception.response.body, 'OK');
      });
  })

  it("Maak een test met intercept, maak gebruik van spying en of stubbing", () => {
    // Intercept and stub the response for a GET request to attractie

    cy.intercept("/homepagina", {
      body: [
        { id: 1, naam: "ABC"},
      ],
    }).as("naam");

    cy.visit('http://localhost:3000/homepagina');

    cy.wait("@naam");

    // Perform the GET request to attractie

    cy.get("body").contains("ABC");
  });
 
