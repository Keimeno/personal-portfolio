// https://docs.cypress.io/api/introduction/api.html

describe('home', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h3', 'Links');
  });
});
