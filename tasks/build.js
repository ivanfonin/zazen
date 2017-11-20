'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var vueify = require('vueify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

// Copy index.html file.
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

// Copy fonts.
gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

// Copy images.
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(newer('dist/images'))
        .pipe(gulp.dest('dist/images'));
});

// Compile CSS.
gulp.task('css', ['images'], function() {
    return gulp.src('src/scss/app.scss')
        .pipe(sass({
          outputStyle     : 'nested',
          imagePath       : 'dist/images',
          precision       : 3,
          errLogToConsole : true
        }))
        .pipe(postcss([
          require('postcss-assets')({
            loadPaths: ['images/'],
            basePath: 'dist/images',
            baseUrl: '/'
          }),
          require('autoprefixer')({
            browsers: ['last 2 versions', '> 2%']
          }),
          require('css-mqpacker'),
          require('cssnano')
        ]))
        .pipe(gulp.dest('dist/css'));
});

// Build scripts.
gulp.task('js', function() {
    // Set up the browserify instance on a task basis.
  return browserify({entries: 'src/js/main.js', extensions: ['.js'], debug: true})
    .transform(vueify)
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));
});


// Build task.
gulp.task('build', ['html', 'fonts', 'css', 'js']);
