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