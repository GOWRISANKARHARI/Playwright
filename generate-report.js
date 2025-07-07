const fs = require('fs');
const reporter = require('cucumber-html-reporter');

const reportDir = 'playwright-report';

// Ensure directory exists
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir);
}

const options = {
  theme: 'bootstrap',
  jsonFile: `${reportDir}/cucumber_report.json`,
  output: `${reportDir}/cucumber_report.html`,
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
console.log('✅ Cucumber report generated successfully!');