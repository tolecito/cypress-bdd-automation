import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

import {
  addCucumberPreprocessorPlugin
} from "@badeball/cypress-cucumber-preprocessor";

import {
  createEsbuildPlugin
} from "@badeball/cypress-cucumber-preprocessor/esbuild";

import cypressOnFix from "cypress-on-fix";

import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {

      // Permite que varios plugins manejen los eventos de Cypress
      on = cypressOnFix(on);

      // Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Esbuild
      on(
          "file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
      );

      // Allure
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
  },
});