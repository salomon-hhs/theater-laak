describe('visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})


describe('Footer links', () => {
  it('renders the correct links', () => {
    cy.visit('/');
    cy.get('[data-testid="footer-link-evenementen"]').should('contain', 'Evenementen');
    cy.get('[data-testid="footer-link-doneer"]').should('contain', 'Doneer');
    cy.get('[data-testid="footer-link-over-ons"]').should('contain', 'Over Ons');
  });
});
 
/*describe('Login', () => {
  it('allows a user to login', () => {
    cy.visit('/login');
    cy.get('input[name="gbnaam"]').type('username');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.get('.user-name').should('contain', 'username');
  });
});*/
