import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import gulp from 'gulp';
// import gulpif from 'gulp-if';
// import rename from 'gulp-rename';
import browsersync from 'browser-sync';
import debug from 'gulp-debug';
import yargs from 'yargs';

const webpackConfig = require('../webpack.config.js');
const argv = yargs.argv;
const production = !!argv.production;

webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'source-map';

gulp.task('scripts', () => gulp.src('./src/js/index.js')
	.pipe(webpackStream(webpackConfig), webpack)
	// .pipe(gulpif(production, rename({
	// 	suffix: '.min',
	// })))
	.pipe(gulp.dest('./dist/js/'))
	.pipe(debug({
		title: 'JS files',
	}))
	.on('end', browsersync.reload));
