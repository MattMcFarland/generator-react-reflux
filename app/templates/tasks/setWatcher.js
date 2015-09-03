var
  browserify = require('browserify'),
  watchify = require('watchify'),
  assign = require('lodash.assign'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  sourcemaps = require('gulp-sourcemaps'),
  gutil = require('gulp-util'),
  pkg = require('../package.json');

module.exports = function(entry, name, dest) {
  var customOpts = {
    entries: entry,
    debug: true
  };
  var watch = function () {
    var opts = assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts));
    var filename = name + ".js";
    b.on('update', watch);
    b.on('log', gutil.log);
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(filename))
      .pipe(buffer())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest));
  };
  watch();
};
