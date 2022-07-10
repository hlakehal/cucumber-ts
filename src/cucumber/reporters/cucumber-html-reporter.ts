import * as reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
    name: 'Cucumber TEST',
  // theme: 'bootstrap', hierarchy
  theme: 'hierarchy',
  jsonFile: 'src/cucumber/reports/cucumber-report.json',
  output: 'src/cucumber/reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
  },
};

reporter.generate(options);