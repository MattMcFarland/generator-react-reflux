'use strict';

/* Module Dependencies */
var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  RSG = require('react-styleguide-generator'),
  ghelp = require ('gulp-showhelp');


/* Task Dependencies */
var
  bundle = require('./tasks/bundle'),
  bundlemin = require("./tasks/bundlemin"),
  lint = require('./tasks/lint'),
  setWatcher = require('./tasks/setWatcher');

/** @task bundle */
gulp.task('bundle-prod', ['lint'], function () {
  bundlemin('./src/main', 'main', './public/js', true);
}).help = "bundles production scripts";

/** @task bundle-dev */
gulp.task('bundle-dev', ['lint'], function () {
  bundle('./src/main', 'main', './public/js', true);
}).help = "bundles test scripts";

/** @task default */
gulp.task('default', ['help']);

/** @task help */
gulp.task('help', function () {
  gutil.log('Please provide a task.');
  ghelp.show();
}).help = "shows this help message.";

/** @task lint */
gulp.task('lint', function () {
  return lint('./src/**/*.js');
}).help = "lint src directory";

/** @task styleguide */
gulp.task('styleguide', function (done) {
  var rsg = RSG('./src/**/*.js', {
    output: '_docs/styleguide'
  });
  rsg.generate(function (err) {
    if (err) {
      console.error(String(err));
    }
    done();
  });
}).help = "generates styleguide";

/** @task watch-index */
gulp.task('watch', function () {
  setWatcher('./src/main', 'main', './public/js');
});
