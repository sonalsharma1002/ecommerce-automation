
module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: [
      'support/world.js',
      'hooks/hooks.js',
      'step-definitions/**/*.js'
    ],
    format: ['progress']
  }
};
