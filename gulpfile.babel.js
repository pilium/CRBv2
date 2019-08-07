import gulp from 'gulp';

const requireDir = require('require-dir');

requireDir('./gulp-tasks/');

export const development = gulp.series(
	'clean',
	gulp.parallel('data', 'favicons'),
	gulp.parallel(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'files']),
	gulp.parallel('serve')
);

export const prod = gulp.series(
	'clean',
	gulp.parallel('data', 'favicons'),
	gulp.series(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'gzip', 'files'])
);

export default development;
