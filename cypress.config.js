const { defineConfig } = require('cypress')

const envName = process.env.ENV || 'dev'
const envConfig = require(`./config/${envName}.env.json`)

module.exports = defineConfig({
    env: envConfig.env,

    e2e: {
        baseUrl: envConfig.env.baseWebUrl,
        baseWebUrl: envConfig.baseWebUrl,
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            return config
        },
    },
})