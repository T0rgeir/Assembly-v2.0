module.exports = function() {

	/* Task 'Watch' */
	$.gulp.task('watch', function() {
		$.gulp.watch('dev/sass/**/*.sass', $.gulp.parallel('sass')).on('change', $.browserSync.reload); 
		$.gulp.watch('dev/pug/pages/**/*.pug', $.gulp.parallel('pug')).on('change', $.browserSync.reload);
	});

};