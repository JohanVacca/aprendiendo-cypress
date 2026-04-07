import { getAdminCredentials } from "../../../fixtures/authFixtures/credentials";

describe("Login UI Tests", () => {

    beforeEach(() => {
        cy.visit("/auth/login");
    });

    it("should login successfully with admin user", () => {

        const { email, password } = getAdminCredentials();

        cy.get('input[formcontrolname="email"]').type(email);
        cy.get('input[type="password"]').type(password);

        cy.get('button[type="submit"]').click();

        cy.url().should('not.include', '/login');

    });

    it("should show error with wrong credentials", () => {

        cy.get('input[formcontrolname="email"]').type("wrong@email.com");
        cy.get('input[type="password"]').type("wrongpassword");

        cy.get('button[type="submit"]').click();

        cy.contains("Las credenciales no coinciden")
            .should('be.visible');

    });

});