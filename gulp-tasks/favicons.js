import gulp from 'gulp';
import favicons from 'gulp-favicons';
import debug from 'gulp-debug';

gulp.task('favicons', () =>
	gulp
		.src('./src/img/favicon.png')
		.pipe(
			favicons({
				icons: {
					appleIcon: true,
					favicons: true,
					online: true,
					appleStartup: true,
					android: true,
					firefox: true,
					yandex: true,
					windows: true,
					coast: true,
				},
			})
		)
		.pipe(gulp.dest('./dist/img/favicons/'))
		.pipe(
			debug({
				title: 'Favicons',
			})
		)
);
