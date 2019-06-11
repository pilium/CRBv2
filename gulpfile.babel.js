import gulp from 'gulp';

const requireDir = require('require-dir');

requireDir('./gulp-tasks/');

export const development = gulp.series(
	'clean',
	gulp.parallel('data'),
	gulp.parallel(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts']),
	gulp.parallel('serve')
);

export const prod = gulp.series(
	'clean',
	gulp.parallel('data'),
	gulp.series(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'gzip'])
);

export default development;
