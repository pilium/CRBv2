import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('files', () => gulp.src('./src/files/**/*')
	.pipe(gulp.dest('./dist/files/'))
	.pipe(debug({
		title: 'Files',
	})));
