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
					online: false,
					appleStartup: false,
					android: false,
					firefox: false,
					yandex: false,
					windows: false,
					coast: false,
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
