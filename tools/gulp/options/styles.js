/**
 * Js
 * configuration
 * object
 *
 */
// config
var config = require('../../config.js');
var pkg = require('../../../package.json');
var banner = '/*!\n' +
  ' * ' + pkg.name + ' (' + pkg.homepage + ')\n' +
  ' * Copyright ' + new Date().getFullYear() + ' ' + pkg.author.name + '\n' +
  ' * Licensed under the ' + pkg.license + '\n' +
  ' */\n';

module.exports = {
  banner: banner,
  sass: {
    precision: 6,
    sourcemap: 'auto',
    outputStyle: 'expanded',
    trace: true,
    bundleExec: true,
    includePaths: [
      config.source.sass,
      config.bootstrap.sass,
      config.bootstrap.mixins
    ]
  },
  autoprefixer: {
    browsers: config.autoprefixerBrowsers
  },
  csscomb: {
    configPath: '.csscomb.json'
  },
  minify: {
    compatibility: 'ie8',
    keepSpecialComments: '*',
    advanced: false
  }
};