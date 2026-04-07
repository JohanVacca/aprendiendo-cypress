import {
    getAdminCredentials,
    getResidentCredentials
} from "../../../fixtures/authFixtures/credentials";

import { doLogin } from "./functions/loginFunction";

import {
    validateSuccessfulLoginResponse,
    validateFailedLoginResponse
} from "./cases/loginValidations";

import { storeAuthToken } from "./functions/storeAuthTokenFunction";

const testUsers = [
    {
        role: "Admin",
        getCredentials: getAdminCredentials
    },
    {
        role: "Resident",
        getCredentials: getResidentCredentials
    }
];

describe("Testing Admin and Resident User Login", () => {

    testUsers.forEach(({ role, getCredentials }) => {

        describe(`${role} Login`, () => {

            it(`should login successfully with ${role} credentials`, () => {
                const credentials = getCredentials();

                doLogin(credentials)
                    .then(validateSuccessfulLoginResponse)
                    .then(storeAuthToken)
                    .then((token) => {
                        expect(token).to.exist;
                    });
            });

            it(`should fail login with wrong ${role} credentials`, () => {
                const wrongCredentials = {
                    email: "wrong@email.com",
                    password: "wrongpassword"
                };

                doLogin(wrongCredentials)
                    .then(validateFailedLoginResponse);
            });

        });

    });

});