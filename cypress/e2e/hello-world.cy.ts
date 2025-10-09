describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.rocketseat.com.br')

    cy.contains('Quero assinar agora', {
      matchCase: false,
    }).click()
  })
})
