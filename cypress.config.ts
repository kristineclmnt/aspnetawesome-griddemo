const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on: (arg0: string, arg1: any) => void, config: any) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;

    },
    defaultCommandTimeout: 25000,
    requestTimeout:25000,
    viewportWidth: 1280,
    viewportHeight: 720,
    scrollBehavior: false,
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: ["cypress/e2e/steps/*.ts"],
    baseUrl: "https://demo.aspnetawesome.com/GridDemo",
    retries: 1,
    video: false,
  },
});
