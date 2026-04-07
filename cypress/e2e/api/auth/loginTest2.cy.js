describe("Login Tests (Beginner Version)", () => {

    const apiUrl = "https://api.metropolis.icu/api";

    const admin = {
        email: "contactometropolisbeta@gmail.com",
        password: "password"
    };

    const resident = {
        email: "residentemetropolis@gmail.com",
        password: "password"
    };

    describe("Admin Login", () => {

        it("should login successfully with admin credentials", () => {

            cy.request({
                method: "POST",
                url: `${apiUrl}/login`,
                body: {
                    email: admin.email,
                    password: admin.password
                }
            }).then((response) => {

                // Validaciones básicas
                expect(response.status).to.eq(200);
                expect(response.body.status.statusCode).to.eq(200);
                expect(response.body.status.message).to.eq("Inicio de sesión exitoso.");

                // Validar token
                const token = response.body.response.data.token;
                expect(token).to.exist;

                // Guardar token
                cy.window().then((win) => {
                    win.localStorage.setItem("authToken", token);
                });

            });

        });

        it("should fail login with wrong admin credentials", () => {

            cy.request({
                method: "POST",
                url: `${apiUrl}/login`,
                failOnStatusCode: false,
                body: {
                    email: "wrong@email.com",
                    password: "wrongpassword"
                }
            }).then((response) => {

                expect(response.status).to.eq(400);
                expect(response.body.status.statusCode).to.eq(400);
                expect(response.body.status.message)
                    .to.eq("Las credenciales no coinciden con nuestros registros.");

            });

        });

    });

    describe("Resident Login", () => {

        it("should login successfully with resident credentials", () => {

            cy.request({
                method: "POST",
                url: `${apiUrl}/login`,
                body: {
                    email: resident.email,
                    password: resident.password
                }
            }).then((response) => {

                expect(response.status).to.eq(200);

                const token = response.body.response.data.token;
                expect(token).to.exist;

            });

        });

        it("should fail login with wrong resident credentials", () => {

            cy.request({
                method: "POST",
                url: `${apiUrl}/login`,
                failOnStatusCode: false,
                body: {
                    email: "wrong@resident.com",
                    password: "wrongpassword"
                }
            }).then((response) => {

                expect(response.status).to.eq(400);

            });

        });

    });

});