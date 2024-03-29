describe('visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})


describe('Register', () => {
  it('allows a user to register', () => {
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

describe('Event', () => {
  it('allows a user to choose an event and buy a ticket', () => {
    cy.visit('http://localhost:3000/evenementen');
    cy.get('#eventlink').click();
    cy.url().should('include', '/Ticket/10');
    cy.get('#rang1').click();
    cy.wait(1000);
    cy.get('#reserveerBtn').click();
    
    cy.wait(1000);
    cy.get('#betaalBtn').click();
    cy.wait(1000);

    cy.intercept({
      method: 'POST',
      url: 'https://fakepay.azurewebsites.net/',
    }).then(interception => {
      if (interception) {
        expect(interception.status).to.eq(200)
        expect(interception.response.body).to.deep.eq({ success: true })
      } else {
        console.error("interception is null")
      }
    })
        
  });
});


describe('Evenement Toevoegen', () => {
  it('it allows admin to add evenement', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddPagina').click();
    cy.url().should('include', '/evenementen-toevoegen');
    cy.get('input[id="naamEvent"]').type('Event name');//types username into gebruikersnaam field
    cy.get('input[id="datum"]').type('datum 123');//types password123 into password field
    cy.get('input[id="beschrijving"]').type('beschrijving');
    cy.get('input[id="img"]').type('foto');
    cy.get('input[id="alt"]').type('this is a foto');
    cy.get('input[id="zaalnr"]').type('zaalnr');
    cy.get('#addEvenement').click();
  });

  /*it('it allows admin to update evenement', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddPagina').click();
    cy.url().should('include', '/evenementen-toevoegen');
    cy.get('input[id="naamEvent"]').type('Event name');//types username into gebruikersnaam field
    cy.get('input[id="datum"]').type('22');//types password123 into password field
    cy.get('input[id="id"]').type('2');
    cy.get('input[id="bandnaam"]').type('bandnaam');
    cy.get('input[id="beschrijving"]').type('beschrijving');
    cy.get('input[id="zaalnr"]').type('1');
    cy.get('input[id="zaalbeschrijving"]').type('zaalbeschrijving');
    cy.get('#updateEvent').click();
  });*/

  /*it('it allows admin to delete evenement', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddPagina').click();
    cy.url().should('include', '/evenementen-toevoegen');
    cy.get('input[id="naamEvent"]').type('Event name');//types username into gebruikersnaam field
    cy.get('input[id="datum"]').type('datum 123');//types password123 into password field
    cy.get('input[id="id"]').type('1');
    cy.get('input[id="bandnaam"]').type('bandnaam');
    cy.get('input[id="beschrijving"]').type('beschrijving');
    cy.get('input[id="zaalnr"]').type('2');
    cy.get('input[id="zaalbeschrijving"]').type('zaalbeschrijving');
    cy.get('#deleteEvent').click();
  });*/
});

describe('Zaal Toevoegen', () => {
  it('it allows admin to add a zaal', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddZaalPage').click();
    cy.url().should('include', '/zaal-toevoegen');
    cy.get('input[id="rang1"]').type('1');
    cy.get('input[id="rang2"]').type('2');
    cy.get('input[id="rang3"]').type('3');

    cy.get('#addZaal').click();
  });

  /*it('it allows admin to update a zaal', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddZaalPage').click();
    cy.url().should('include', '/zaal-toevoegen');
     cy.get('input[id="rang1"]').type('10');
    cy.get('input[id="rang2"]').type('1');
    cy.get('input[id="rang3"]').type('2');

    cy.get('#updateZaal').click();
  });*/

 /* it('it allows admin to delete a zaal', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddZaalPage').click();
    cy.url().should('include', '/zaal-toevoegen');
    cy.get('input[id="rang1"]').type('10');
    cy.get('input[id="rang2"]').type('1');
    cy.get('input[id="rang3"]').type('2');

    cy.get('#deleteZaal').click();
  });*/
});

/*describe('Print tickets', () => {
  it('it allows admin to print ticket', () => {
    cy.visit('http://localhost:3000/admin');
    cy.get('#toPrintPage').click();
    cy.url().should('include', '/print-ticket');

    cy.get('#searchbtn').click();
  });
});*/

describe('Admin menu', () => {
  it('it allows admin to go back to admin menu', () => {
    /*cy.visit('http://localhost:3000/print-ticket');
    cy.get('#backToMenuFromPrint').click();
    cy.url().should('include', '/admin');
    cy.wait(1000);*/

    cy.visit('http://localhost:3000/evenementen-toevoegen');
    cy.get('#backToMenu').click();
    cy.url().should('include', '/admin');
    cy.wait(1000);

    cy.visit('http://localhost:3000/zaal-toevoegen');
    cy.get('#backToMenuFromZaal').click();
    cy.url().should('include', '/admin');
    cy.wait(1000);

    cy.visit('http://localhost:3000/admin');
    cy.get('#toAddZaalPage').click();
    cy.url().should('include', '/zaal-toevoegen');

    cy.get('#addZaal').click();
  });
});

describe('Login API Test', () => {
  it('Intercepts and stubs a login', () => {
    // Intercept and stub the response for a GET request to login

    cy.intercept("/inloggen", {
      body: [
        { gbnaam: "spider man", password: "12345Ww;" },
        { gbnaam: "The Flash", password: "54321Ww;" },
      ],
    }).as("loginRequest");

    // Perform the GET request to login
    /*cy.wait("@loginRequest").then((response) => {
      // Assert that the response body contains the correct data
      expect(response.response.body).to.deep.equal([
        { gbnaam: "spider man", password: "12345Ww;" },
        { gbnaam: "The Flash", password: "54321Ww;"},
      ]);
    });*/
  });
});


/*cy.intercept({
  method: 'POST',
  url: '/doneren',
}).as('apiCheck')

cy.visit('/')
cy.wait('@apiCheck').then((interception) => {
  assert.isNotNull(interception.response.body, 'donatie API call has data')
})*/
