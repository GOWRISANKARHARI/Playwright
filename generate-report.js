const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'playwright-report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Test Environment": "Jenkins",
    "Browser": "Chromium",
    "Platform": "Windows 10",
    "Executed": "Jenkins"
  }
});
