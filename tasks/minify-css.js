var gulp = require('gulp')
var plumber = require('gulp-plumber')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')

module.exports = function(){
	return gulp
		.src('./dist/src/styles/styles.css')
		.pipe(plumber())
		.pipe(cleanCSS())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/src/styles'))
}
