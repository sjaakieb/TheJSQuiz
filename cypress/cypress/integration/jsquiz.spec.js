const websiteUrl = 'https://thejsquiz.com';

describe('TheJSQuiz integration tests', () => {
  it('visits website without error', () => {
    cy.visit(websiteUrl);
  });
});
