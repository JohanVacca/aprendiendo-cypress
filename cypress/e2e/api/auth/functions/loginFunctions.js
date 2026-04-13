import { loginEndpoint } from "../../../../fixtures/authFixtures/authApis";

export const doLogin = ({ email, password }) => {
    return cy.request({
        method: 'POST',
        url: loginEndpoint,
        body: { email, password },
        failOnStatusCode: false,
    });
};

export const storeAuthToken = (body) => {
    const token = body?.response?.data?.token

    if (!token) {
        throw new Error("Token not found")
    }

    return cy.window().then((win) => {
        win.localStorage.setItem("authToken", token)
        return token
    })
}