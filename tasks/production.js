'use strict'

var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var vueify = require('vueify')
var envify = require('envify/custom')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var gutil = require('gulp-util')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var newer = require('gulp-newer')
var imagemin = require('gulp-imagemin')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')

// Copy index.html file.
gulp.task('production-html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
})

// Copy fonts.
gulp.task('production-fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

// Copy images and minify them.
gulp.task('production-images', function() {
    return gulp.src('src/images/**/*')
        .pipe(newer('dist/images'))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})

// CSS settings.
var css = {
  src         : 'src/scss/app.scss',
  watch       : 'src/scss/**/*',
  build       : 'dist/css',
  sassOpts: {
    outputStyle     : 'nested',
    imagePath       : 'dist/images',
    precision       : 3,
    errLogToConsole : true
  },
  processors: [
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
  ]
}

// Compile CSS.
gulp.task('production-css', ['production-images'], function() {
    return gulp.src(css.src)
        .pipe(sass(css.sassOpts))
        .pipe(postcss(css.processors))
        .pipe(gulp.dest(css.build))
})

// Build scripts.
gulp.task('production-js', function() {
    // Set up the browserify instance on a task basis.
  return browserify({entries: 'src/js/main.js', extensions: ['.js'], debug: true})
    .transform(vueify)
    .transform(
        // Required in order to process node_modules files
        { global: true },
        envify({ NODE_ENV: 'production' })
    )
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})


// Build task.
gulp.task('production', ['production-html', 'production-fonts', 'production-css', 'production-js'])
