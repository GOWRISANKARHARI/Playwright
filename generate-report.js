const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: '.', // the directory containing the JSON file
  reportPath: './playwright-report',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Jenkins Node',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Project', value: 'Playwright BDD' },
      { label: 'Release', value: '1.0' },
      { label: 'Cycle', value: 'Regression' },
      { label: 'Executed By', value: 'Jenkins' },
      { label: 'Execution Time', value: new Date().toLocaleString() }
    ]
  }
});
