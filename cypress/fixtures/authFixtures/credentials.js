export const getAdminCredentials = () => ({
    email: Cypress.env('api_admin_user'),
    password: Cypress.env('api_admin_pass')
});

export const getResidentCredentials = () => ({
    email: Cypress.env('api_resident_user'),
    password: Cypress.env('api_resident_pass')
});