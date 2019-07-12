import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGiflossy from 'imagemin-giflossy';
import debug from 'gulp-debug';
import browsersync from 'browser-sync';
import yargs from 'yargs';
import rename from 'gulp-rename';

const argv = yargs.argv;
const production = !!argv.production;

gulp.task('images', () => gulp.src(['./src/img/**/*.{jpg,jpeg,png,gif,svg}', '!./src/img/svg/*.svg', '!./src/img/favicon.{jpg,jpeg,png,gif}'])
	.pipe(gulpif(production, imagemin([
		imageminGiflossy({
			optimizationLevel: 3,
			optimize: 3,
			lossy: 2,
		}),
		imageminPngquant({
			speed: 5,
			quality: [0.6, 0.8],
		}),
		imageminZopfli({
			more: true,
		}),
		imageminMozjpeg({
			progressive: true,
			quality: 70,
		}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: false},
				{removeUnusedNS: true},
				{removeUselessStrokeAndFill: true},
				{cleanupIDs: true},
				{removeComments: true},
				{removeEmptyAttrs: true},
				{removeEmptyText: true},
				{collapseGroups: true},
			],
		}),
	])))
	.pipe(rename((path) => {
		path.basename = path.basename.replace('_webp', '');
	}))
	.pipe(gulp.dest('./dist/img/'))
	.pipe(debug({
		title: 'Images',
	}))
	.on('end', browsersync.reload));
