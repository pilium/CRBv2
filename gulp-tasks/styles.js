import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import mincss from 'gulp-clean-css';
import groupmedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import debug from 'gulp-debug';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;

gulp.task('styles', () => gulp.src(
	[
		'./src/styles/main.scss',
		'./src/styles/critical.scss',
	])
	.pipe(gulpif(!production, sourcemaps.init()))
	.pipe(plumber())
	.pipe(sass())
	.pipe(groupmedia())
	.pipe(gulpif(production, autoprefixer({
		browsers: ['last 1 versions', '> 1%', 'IE 11'],
	})))
	.pipe(gulpif(production, mincss({
		compatibility: 'ie10',
		level: {
			1: {
				specialComments: 0,
				removeEmpty: true,
				removeWhitespace: true,
			},
			2: {
				mergeMedia: true,
				removeEmpty: true,
				removeDuplicateFontRules: true,
				removeDuplicateMediaBlocks: true,
				removeDuplicateRules: true,
				removeUnusedAtRules: false,
			},
		},
	})))
	.pipe(gulpif(production, rename({
		suffix: '.min',
	})))
	.pipe(plumber.stop())
	.pipe(gulpif(!production, sourcemaps.write('./maps/')))
	.pipe(gulp.dest('./dist/styles/'))
	.pipe(debug({
		title: 'CSS files',
	}))
	.pipe(browsersync.stream()));
