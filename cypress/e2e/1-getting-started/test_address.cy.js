describe('test_address', () => {
  it('tests test_address', () => {
    cy.viewport(1299, 927);
    cy.visit('http://localhost:8080/');
    cy.get('div.container-fluid div:nth-of-type(1) > a').click();
    cy.get("[data-cy='username']").type('admin');
    cy.get("[data-cy='password']").click();
    cy.get("[data-cy='password']").type('admin');
    cy.get("[data-cy='submit']").click();
    cy.get("[data-cy='entity']").click();
    cy.get('.nav-item.show > .dropdown-menu > :nth-child(4) > .dropdown-item').click();
    cy.get(':nth-child(10) > .text-end > .btn-group > [data-cy="entityEditButton"]').click();
    // cy.get("html > body > jhi-app > jhi-main > div.container-fluid > div > jhi-address > div > #entities > table > tbody > [data-cy='entityTable'] [data-cy='entityEditButton'] > span").click();
    cy.get('jhi-address-update > div').click();
    cy.get("[data-cy='address1']").clear().type('jjjjjjjjjjjjj');
    cy.get("[data-cy='entityCreateSaveButton'] > span").click();
    cy.visit('http://localhost:8080/address');
  });
});
