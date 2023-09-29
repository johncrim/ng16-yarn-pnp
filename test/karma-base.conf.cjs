// Karma configuration function, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (projectName) {
  return {
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-mocha-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './dist/test/coverage/' + projectName),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'cobertura' }
      ]
    },
    junitReporter: {
      outputDir: require('path').join(__dirname, '../../dist/test/junit/' + projectName), // results will be saved as $outputDir/$browserName.xml
      suite: projectName,
      useBrowserName: false, // Only b/c we want the test file name to be testsuite.name
      classNameFormatter: (browser, result) => result.suite.join(' › '), // function (browser, result) to customize the classname attribute in xml testcase element
      nameFormatter: (browser, result) => `${result.suite.join(' › ')}:${result.description}`,
      properties: {} // key value pair of properties to add to the <properties> section of the report
    },
    reporters: ['mocha', 'kjhtml'],
    // port: 9876,
    // colors: true,
    // logLevel: config.LOG_DEBUG,
    // autoWatch: true,
    browsers: ['ChromeDebugging'], // 'ChromeHeadless', 'ChromeDebugging'
    // singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        // Explicitly specified to launch chrome in Debug mode
        flags: ['--remote-debugging-port=9222']
      }
    },
  };
};
