const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results/json",           // ✅ this folder must contain the JSON report
  reportPath: "test-results/html",        // ✅ this folder will contain the HTML output
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Gowrisankar's Laptop",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Execution Info",
    data: [
      { label: "Project", value: "Playwright + Cucumber" },
      { label: "Release", value: "1.0.0" },
      { label: "Execution Start Time", value: new Date().toLocaleString() },
      { label: "Execution End Time", value: new Date().toLocaleString() },
    ],
  },
});
