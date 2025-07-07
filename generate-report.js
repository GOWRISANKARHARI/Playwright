const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  HTMLFile: 'cucumber_report.html',
  output: 'playwright-report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
