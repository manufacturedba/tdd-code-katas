var gulp = require('gulp');
var Server = require('karma').Server;
var notifierReporter = require('mocha-notifier-reporter');

gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['progress', 'notify'],
    notifyReporter: {
      reportEachFailure: true, // Default: false, Will notify on every failed sepc
      reportSuccess: false, // Default: true, Will notify when a suite was successful
    }
  }, done).start();
});

gulp.task('tdd', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false,
    autoWatch: true,
    reporters: ['progress', 'notify'],
    notifyReporter: {
      reportEachFailure: true, // Default: false, Will notify on every failed sepc
      reportSuccess: false, // Default: true, Will notify when a suite was successful
    }
  }, done).start();
});

gulp.task('default', ['tdd']);
