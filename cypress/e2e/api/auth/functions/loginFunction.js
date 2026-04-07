import { loginEndpoint } from "../../../../fixtures/authFixtures/authApis";

export const doLogin = ({ email, password }) => {
    return cy.request({
        method: 'POST',
        url: loginEndpoint,
        body: { email, password },
        failOnStatusCode: false,
    });
};