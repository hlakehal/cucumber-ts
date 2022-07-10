const formatOptions = {
  'snippetInterface': 'async-await'
};
const common = [
  'src/features/**/*.feature',
  '--require-module ts-node/register',
  '--require src/step-definitions/**/*.ts',
  '--format progress-bar',
  '--require src/cucumber/test.setup.ts',
  // '--format node_modules/cucumber-pretty',
  '--format json:src/cucumber/reports/cucumber-report.json',
  '--format summary',
  '--format-options \'{"snippetInterface": "async-await"}\'' 
].join(' ');

module.exports = {
  default: common,
  // default: '--publish-quiet'
  // More profiles can be added if desired
};