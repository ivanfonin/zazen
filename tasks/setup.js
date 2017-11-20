var gulp = require('gulp');

gulp.task('setup', function() {
    return gulp.src('node_modules/uikit/src/scss/**/*')
        .pipe(gulp.dest('src/scss/uikit'));
});
