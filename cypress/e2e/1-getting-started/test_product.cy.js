describe('test_product', () => {
  it('tests test_product', () => {
    cy.viewport(1299, 927);
    cy.visit('http://localhost:8080/');
    cy.get('div.container-fluid div:nth-of-type(1) > a').click();
    cy.get("[data-cy='username']").type('admin');
    cy.get("[data-cy='password']").click();
    cy.get("[data-cy='password']").type('admin');
    cy.get("[data-cy='submit']").click();
    cy.get("[data-cy='entity']").click();
    cy.get('li.show > ul > li:nth-of-type(2) span').click();
    cy.get('table').contains('td', 'ejemplo').parent().find('[data-cy="entityDeleteButton"]').click();
    cy.get('[data-cy="entityConfirmDeleteButton"]').click();
  });
});
