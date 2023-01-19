describe('visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})


/*describe('Footer links', () => {
  it('renders the correct links', () => {
    cy.visit('http://localhost:3000/');
    //cy.get('a[href="/evenementen"]',{ multiple: true }).click();
    //cy.url().should('include', '/evenementen');
    //cy.get('[data-testid="footer-link-doneer"]').should('contain', 'Doneer');
    //cy.get('[data-testid="footer-link-over-ons"]').should('contain', 'Over Ons');
  });
});*/

describe('Register', () => {
  it('allows a user to login', () => {
    cy.visit('http://localhost:3000/inloggen');
    cy.get('input[id="vnaam"]').type('username');//types username into gebruikersnaam field
    cy.get('input[id="email"]').type('username@gmail.com');//types username into gebruikersnaam field
    cy.get('input[id="password"]').type('Password123;');//types password123 into password field
    cy.get('input[id="passwordConformation"]').type('Password123;');//types username into gebruikersnaam field
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.get('.user-name').should('contain', 'username');
  });
});
 
describe('Login', () => {
  it('allows a user to login', () => {
    cy.visit('http://localhost:3000/inloggen');
    cy.get('input[id="gbnaam"]').type('username');//types username into gebruikersnaam field
    cy.get('input[id="password"]').type('password123;');//types password123 into password field
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.get('.user-name').should('contain', 'username');
  });
});
