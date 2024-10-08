import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost",
      show: true,
      chromium: {
        args: [
          "--disable-extensions",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-dev-shm-usage",
        ],
      },
    },
  },
  multiple: {
    basic: {
      browsers: ["chromium", "firefox"],
    },
  },
  include: {
    I: "./steps_file",
  },
  name: "AutomationJS",
  gherkin: {
    features: "./features/**/*.feature",
    steps: "./step_definitions/**/*.ts",
  },
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output",
      useCucumberStepReporter: true,
    },
  },
};
