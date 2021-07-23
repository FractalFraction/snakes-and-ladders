describe('Testing core features of Snakes and Ladders',() => {
  it('The user can roll a dice and it moves a counter on the board', ()=> {
    cy.visit('/')
    cy.get("#board")
    cy.get("#counter").should('have.value',0)
    cy.stub("#dice-button", 'onClick', () => 3)
    cy.get("#dice-button").click()
    cy.get("#counter").should('have.value',3)
  })
})