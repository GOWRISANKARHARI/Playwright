const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './', // Location of cucumber_report.json
  reportPath: './playwright-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: '114',
    },
    device: 'Local machine',
    platform: {
      name: 'windows',
      version: '11',
    },
  },
  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Project', value: 'Playwright BDD Cucumber Tests' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Executed By', value: 'Jenkins' },
      { label: 'Date', value: new Date().toLocaleString() },
    ],
  },
});
