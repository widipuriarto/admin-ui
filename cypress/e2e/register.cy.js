describe("User Register", () => {
  it("should allow user to register", () => {
    cy.viewport(375, 812);

    cy.visit("https://admin-ui-theta-azure.vercel.app/");
    cy.get("div").contains("Create an account").click();
    cy.url().should("include", "/register");

    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Widi Puriarto")
      .type("Widi")
      .should("have.value", "Widi");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202314962@mhs.dinus.ac.id")
      .should("have.value", "111202314962@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "••••••••")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    
    cy.wait(5000);
  });

});