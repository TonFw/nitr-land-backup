// Generated on 2016-09-10 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var bower = require('gulp-bower');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');

var yeoman = {
  app: require('./bower.json').appPath || 'src',
  dist: 'public'
};

var paths = {
  scripts: [yeoman.app + '/scripts/**/*.js'],
  styles: [yeoman.app + '/styles/**/*.scss'],
  main_sass_file: `${yeoman.app}/styles/main.scss`,
  sass_dist: `${yeoman.dist}/styles`,
  test: ['test/spec/**/*.js'],
  pugs: ['pug/**/*.pug'],
  testRequire: [
    yeoman.app + '/bower_components/angular/angular.js',
    yeoman.app + '/bower_components/angular-mocks/angular-mocks.js',
    yeoman.app + '/bower_components/angular-resource/angular-resource.js',
    yeoman.app + '/bower_components/angular-cookies/angular-cookies.js',
    yeoman.app + '/bower_components/angular-sanitize/angular-sanitize.js',
    yeoman.app + '/bower_components/angular-route/angular-route.js',
    'test/mock/**/*.js',
    'test/spec/**/*.js'
  ],
  karma: 'karma.conf.js',
  views: {
    dir: yeoman.app + '/views',
    main: yeoman.app + '/index.html',
    files: [yeoman.app + '/views/**/*.html']
  }
};

////////////////////////
// Reusable pipelines //
////////////////////////

var lintScripts = lazypipe()
  .pipe($.jshint, '.jshintrc')
  .pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
  .pipe($.sass, {
    outputStyle: 'expanded',
    precision: 10
  })
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, '.tmp/styles');

var views = lazypipe()
  .pipe(gulp.src, 'pug/*.pug')
  .pipe(pug)
  .pipe(gulp.dest, paths.views.dir);

///////////
// Tasks //
///////////

gulp.task('bower', function() {
  return bower();
});

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(styles());
});

gulp.task('sass', function() {
  gulp.src(paths.main_sass_file)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('public/styles'))
    .pipe($.connect.reload());
});

// When it executes it drop the new HTML on the SRC folder, not on the PUBLIC folder
gulp.task('views', function buildHTML() {
  return gulp.src('pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest(paths.views.dir));
});

gulp.task('lint:scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(lintScripts())
    .pipe($.connect.reload());
});

gulp.task('clean:tmp', function (cb) {
  rimraf('./.tmp', cb);
});

gulp.task('start:client', ['start:server', 'styles'], function () {
  openURL('http://localhost:9090');
});

gulp.task('start:server', function() {
  $.connect.server({
    root: [yeoman.dist, '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9090
  });
});

gulp.task('start:server:test', function() {
  $.connect.server({
    root: ['test', yeoman.app, '.tmp'],
    livereload: true,
    port: 9001
  });
});

gulp.task('watch', function () {
  // watch the pug files & transform it in HTML views
  gulp.watch(paths.pugs, ['views']);

  // watch the HTML files & add it to the public folder
  gulp.watch(paths.views.files, ['html']);

  // watch SASS files & create it min css
  gulp.watch(paths.styles, ['sass']);

  // watch JS files & create it min js
  gulp.watch(paths.scripts, ['client:build']);

  $.watch(paths.test)
    .pipe($.plumber())
    .pipe(lintScripts());

  gulp.watch('bower.json', ['bower']);
});

gulp.task('serve', function (cb) {
  runSequence('clean:tmp',
    ['lint:scripts'],
    ['start:client'],
    'watch', cb);
});

gulp.task('serve:prod', function() {
  $.connect.server({
    root: [yeoman.dist],
    livereload: true,
    port: 9090
  });
});

gulp.task('test', ['start:server:test'], function () {
  var testToFiles = paths.testRequire.concat(paths.scripts, paths.test);
  return gulp.src(testToFiles)
    .pipe($.karma({
      configFile: paths.karma,
      action: 'watch'
    }));
});

// inject bower components
gulp.task('wiredep', function () {
  return gulp.src(paths.views.main)
    .pipe(wiredep({
      directory: 'bower_components',
      ignorePath: '..'
    }))
    .pipe(gulp.dest(yeoman.app));
});

///////////
// Build //
///////////

gulp.task('clean:dist', function (cb) {
  rimraf('./public', cb);
});


// Removed the version on the file name:
//  .pipe($.rev())
//  .pipe($.revReplace())
gulp.task('client:build', ['html', 'styles'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src(paths.views.main)
    .pipe($.useref({searchPath: [yeoman.app, '.tmp']}))
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.minifyCss({cache: false}))
    .pipe(cssFilter.restore())
    .pipe(gulp.dest(yeoman.dist))
    .pipe($.connect.reload());
});

gulp.task('html', function () {
  return gulp.src(yeoman.app + '/views/**/*')
    .pipe(gulp.dest(yeoman.dist + '/views'))
    .pipe($.connect.reload());
});

gulp.task('images', function () {
  return gulp.src(yeoman.app + '/images/**/*')
    .pipe(gulp.dest(yeoman.dist + '/images'));
});

gulp.task('copy:extras', function () {
  return gulp.src(yeoman.app + '/*/.*', { dot: true })
    .pipe(gulp.dest(yeoman.dist));
});

gulp.task('copy:fonts', function () {
  return gulp.src(yeoman.app + '/fonts/**/*')
    .pipe(gulp.dest(yeoman.dist + '/fonts'));
});

gulp.task('build', ['clean:dist'], function () {
  runSequence(['images', 'copy:extras', 'copy:fonts', 'serve', 'client:build']);
});

gulp.task('default', ['build']);
