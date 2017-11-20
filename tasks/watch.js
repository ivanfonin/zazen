var gulp = require('gulp'),
    browsersync = require('browser-sync');

// Start BrowserSync.
gulp.task('browsersync', () => {
    browsersync({
		server: {
			baseDir: 'dist',
			index: 'index.html'
		}
	});
});

// Watch source files.
gulp.task('watch', ['browsersync'], () => {
    
    // Watch index.html file.
    gulp.watch('src/index.html', ['watch-html']);
    
    // Fonts changes.
    gulp.watch('src/fonts/**/*', ['watch-fonts']);
    
    // Image changes.
    gulp.watch('src/images/**/*', ['watch-images']);
    
    // CSS changes.
    gulp.watch('src/scss/**/*', ['watch-css']);
    
    // JavaScript changes.
    gulp.watch('src/js/**/*', ['watch-js']);
    
});

// Reload browsers when html task is done.
gulp.task('watch-html', ['html'], (done) => {
    browsersync.reload();
    done();
}); 

// Reload browsers when fonts task is done.
gulp.task('watch-fonts', ['fonts'], (done) => {
    browsersync.reload();
    done();
}); 

// Reload browsers when images task is done.
gulp.task('watch-images', ['images'], (done) => {
    browsersync.reload();
    done();
}); 

// Reload browsers when css task is done.
gulp.task('watch-css', ['css'], (done) => {
    browsersync.reload();
    done();
}); 

// Reload browsers when js task is done.
gulp.task('watch-js', ['js'], (done) => {
    browsersync.reload();
    done();
});
