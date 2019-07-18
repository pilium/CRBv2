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
				css: ['dist/styles/critical.min.css'],
				minify: true,
			})
		)
		.pipe(gulp.dest('dist'))
);

