var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var cssnext = require('gulp-cssnext');
var csso = require('gulp-csso');
var options = require('minimist')(process.argv.slice(2));

gulp.task("styles", function() {
	gulp.src("./src/css/*.css")
	.pipe(!options.production ? plumber() : gutil.noop())
	.pipe(cssnext({
		compress: options.production,
		sourcemap: !options.production
	}))
	.pipe(gulp.dest("./dist/css/"))	
})

gulp.task("default", ["styles"], function() {
	gulp.watch("./src/css/**/*", ["styles"])
})