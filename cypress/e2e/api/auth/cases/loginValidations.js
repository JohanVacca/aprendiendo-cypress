export const validateSuccessfulLoginResponse = (response) => {
    expect(response.status).to.eq(200)
    expect(response.body.status.statusCode).to.eq(200)
    expect(response.body.response.data.token).to.exist

    return response.body
}

export const validateFailedLoginResponse = (response) => {
    expect(response.status).to.eq(400)
    expect(response.body.status.statusCode).to.eq(400)
    expect(response.body.status.message)
        .to.eq("Las credenciales no coinciden con nuestros registros.")

    return response.body
}