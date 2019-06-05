import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('fonts', () => gulp.src('./src/fonts/**/*.{woff,woff2}')
	.pipe(gulp.dest('./dist/fonts/'))
	.pipe(debug({
		title: 'Fonts',
	})));
