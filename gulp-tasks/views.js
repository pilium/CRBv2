import gulp from 'gulp';
import pug from 'gulp-pug';
import pugbem from 'gulp-pugbem';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import browsersync from 'browser-sync';
import yargs from 'yargs';

import getJsonData from './utils/getJsonData';

const argv = yargs.argv;
const production = !!argv.production;

gulp.task('views', () =>
	gulp
		.src(['./src/views/index.pug', './src/pages/*.pug'])
		.pipe(
			pug({
				plugins: [pugbem],
				pretty: false,
				locals: {
					...getJsonData('./tmp/data.json'),
				},
			})
		)
		.pipe(gulpif(production, replace('.css', '.min.css')))
		// .pipe(gulpif(production, replace('.js', '.min.js')))
		.pipe(gulp.dest('./dist/'))
		.on('end', browsersync.reload)
);
