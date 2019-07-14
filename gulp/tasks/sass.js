module.exports = function() {

	/* Task 'Sass' */
	$.gulp.task('sass', function() { 
	  return $.gulp.src('dev/sass/**/*.sass') 
			.pipe($.gp.sass()) // Converting sass codes in css
			.pipe($.gp.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Autoprefixer for browsers: Chrome, Mozilla, Opera, Safari, (IE?)
			.pipe($.gulp.dest('dev/css')) 
			.pipe($.browserSync.reload({ // Live reload
				stream: true
			})) 
	});

};