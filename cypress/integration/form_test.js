describe("User Onboarding App", () => {
  beforeEach(() => {
    // Start Fresh
    cy.visit("localhost:3000");
  });

  // Create CSS selector helpers
  const firstNameInput = () => {
    return cy.get("input[name=firstName]");
  };
  const lastNameInput = () => {
    return cy.get("input[name=lastName]");
  };
  const emailInput = () => {
    return cy.get("input[name=email]");
  };
  const passwordInput = () => {
    return cy.get("input[name=password]");
  };
  const acceptTOSCheckbox = () => {
    return cy.get("input[name=acceptTOS]");
  };
  const submitButton = () => {
    return cy.get("button[id=submitButton]");
  };

  // Ensure Cypress is functional
  it("cypress is working", () => {
    expect(5 + 15).to.equal(20);
  });

  // Ensure page elements are present
  it("page elements are present", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    acceptTOSCheckbox().should("exist");
    submitButton().should("exist");
  });
});
// DANGER ZONE!
