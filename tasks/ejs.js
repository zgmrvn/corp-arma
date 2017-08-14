var gulp = require('gulp')
var plumber = require('gulp-plumber')
var ejs = require('gulp-ejs')
var rename = require('gulp-rename')

module.exports = function(){
	return gulp
		.src('./assets/partials/index.ejs')
		.pipe(plumber())
		.pipe(ejs())
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./dist'))
}
