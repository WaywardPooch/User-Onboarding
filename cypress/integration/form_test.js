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

  // Test if input fields functional
  describe("Filling out the form", () => {
    it("submit button starts disabled", () => {
      submitButton().should("be.disabled");
    });

    it("can type inside each text field", () => {
      firstNameInput()
        .should("have.value", "")
        .type("Johnny")
        .should("have.value", "Johnny");

      lastNameInput()
        .should("have.value", "")
        .type("Silverhand")
        .should("have.value", "Silverhand");

      emailInput()
        .should("have.value", "")
        .type("jsilverhand@cyberpunk.net")
        .should("have.value", "jsilverhand@cyberpunk.net");

      passwordInput()
        .should("have.value", "")
        .type("w3lc0m3_2_N1GHT-C1TY")
        .should("have.value", "w3lc0m3_2_N1GHT-C1TY");
    });

    it("can check the 'accept ToS' box", () => {
      acceptTOSCheckbox().should("not.be.checked").check().should("be.checked");
    });
  });

  // Test if form can be submitted
  describe("Submitting information", () => {
    it("submit button enables when input fields are full", () => {
      // Fill in all inputs
      firstNameInput().type("Johnny");
      lastNameInput().type("Silverhand");
      emailInput().type("jsilverhand@cyberpunk.net");
      passwordInput().type("w3lc0m3_2_N1GHT-C1TY");
      acceptTOSCheckbox().check();

      // Check if submit button is enabled
      submitButton().should("not.be.disabled");
    });

    it("can submit the form", () => {
      // Input form data
      firstNameInput().type("Johnny");
      lastNameInput().type("Silverhand");
      emailInput().type("jsilverhand@cyberpunk.net");
      passwordInput().type("w3lc0m3_2_N1GHT-C1TY");
      acceptTOSCheckbox().check();

      // Click the submit button
      submitButton().click();

      // Check if the new user is present
      cy.contains("Johnny Silverhand");
    });
  });

  // Test for form validation
  describe("Form Validation Errors", () => {
    it("invalid first name produces error", () => {
      firstNameInput().type("a");
      cy.contains("First Name requires at least 2 letters");
      firstNameInput().type("{selectall}{backspace}");
      cy.contains("A first name is required!");
    });
  });
});
