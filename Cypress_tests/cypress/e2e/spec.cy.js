describe('visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})


describe('Register', () => {
  it('allows a user to login', () => {
    cy.visit('http://localhost:3000/registreren');
    cy.get('input[id="vnaam"]').type('username');//types username into gebruikersnaam field
    cy.get('input[id="email"]').type('username@gmail.com');//types username into gebruikersnaam field
    cy.get('input[id="password"]').type('Password123;');//types password123 into password field
    cy.get('input[id="passwordConformation"]').type('Password123;');//types username into gebruikersnaam field
    cy.get('#registerbtn').click();
    cy.url().should('include', '/');
  });
});
 
describe('Login', () => {
  it('allows a user to login', () => {
    cy.visit('http://localhost:3000/inloggen');
    cy.get('input[id="gbnaam"]').type('username');//types username into gebruikersnaam field
    cy.get('input[id="password"]').type('password123;');//types password123 into password field
    cy.get('#loginbtn').click();
    cy.url().should('include', '/');
   // cy.get('.user-name').should('contain', 'username');
  });
});

describe('Evenement Toevoegen', () => {
  it('it allows admin to add evenement', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddPagina').click();
    cy.url().should('include', '/evenementen-toevoegen');
    cy.get('input[id="naamEvent"]').type('Event name');//types username into gebruikersnaam field
    cy.get('input[id="datum"]').type('datum 123');//types password123 into password field
    cy.get('input[id="id"]').type('id');
    cy.get('input[id="bandnaam"]').type('bandnaam');
    cy.get('input[id="beschrijving"]').type('beschrijving');
    cy.get('input[id="zaalnr"]').type('zaalnr');
    cy.get('input[id="zaalbeschrijving"]').type('zaalbeschrijving');
    cy.get('#addEvenement').click();
  });
});


describe('Footer links', () => {
  it('renders the correct links', () => {
    cy.visit('http://localhost:3000/');
    //cy.get('a[href="/evenementen"]',{ multiple: true }).click();
    //cy.url().should('include', '/evenementen');
    //cy.get('[data-testid="footer-link-doneer"]').should('contain', 'Doneer');
    //cy.get('[data-testid="footer-link-over-ons"]').should('contain', 'Over Ons');
  });
});