import gulp from 'gulp';
import plumber from 'gulp-plumber';
import yaml from 'gulp-yaml';
import mergeJson from 'gulp-merge-json';

gulp.task('data', () =>
	gulp
		.src(['**/**/*.yml', '!**/_*.yml'], {cwd: 'src/blocks'})
		.pipe(plumber())
		.pipe(yaml({space: '\t'}))
		.pipe(mergeJson({fileName: 'data.json'}))
		.pipe(gulp.dest('./tmp'))
);
