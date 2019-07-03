import gulp from 'gulp';
let critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', () =>
	gulp
		.src('dist/*.html')
		.pipe(
			critical({
				base: 'dist/',
				inline: true,
				css: ['dist/styles/main.min.css'],
				minify: true,
				extract: true,
			})
		)
		.pipe(gulp.dest('dist'))
);

