'use strict'

var gulp = require('gulp')

// Copy UIkit scss files from node_modules into src/scss folder.
gulp.task('setup', function() {
    return gulp.src('node_modules/uikit/src/scss/**/*')
        .pipe(gulp.dest('src/scss/uikit'))
})
