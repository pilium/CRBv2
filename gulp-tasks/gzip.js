import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('gzip', () => gulp.src('./src/.htaccess')
	.pipe(gulp.dest('./dist/'))
	.pipe(debug({
		title: 'GZIP config',
	})));
