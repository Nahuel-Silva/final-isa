describe('test_customer', () => {
  it('tests test_customer', () => {
    cy.viewport(1299, 927);
    cy.visit('http://localhost:8080/');
    cy.get('div.container-fluid div:nth-of-type(1) > a').click();
    cy.get("[data-cy='username']").type('admin');
    cy.get("[data-cy='password']").click();
    cy.get("[data-cy='password']").type('admin');
    cy.get("[data-cy='submit']").click();
    cy.get('li:nth-of-type(3) span > span').click();
    cy.get("[data-cy='entity']").click();
    cy.get('li.show li:nth-of-type(3) span').click();
    cy.get("[data-cy='entityCreateButton']").click();
    cy.get("[data-cy='firstName']").click();
    cy.get("[data-cy='firstName']").type('ejemplo');
    cy.get("[data-cy='lastName']").click();
    cy.get("[data-cy='lastName']").type('ejemplo1');
    cy.get("[data-cy='email']").click();
    cy.get("[data-cy='email']").type('ejemplo@gmail.com');
    cy.get("[data-cy='telephone']").type('1111111111111');
    cy.get("[data-cy='entityCreateSaveButton'] > span").click();
    cy.visit('http://localhost:8080/customer');
  });
});
