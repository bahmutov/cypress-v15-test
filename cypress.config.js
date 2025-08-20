const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultBrowser: 'electron',
  experimentalStudio: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})
