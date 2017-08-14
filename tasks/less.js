var gulp = require('gulp')
var plumber = require('gulp-plumber')
var less = require('gulp-less')
var rename = require('gulp-rename')

module.exports = function(){
	return gulp
		.src('./assets/styles/importer.less')
		.pipe(plumber())
		.pipe(less({
			paths: ['./assets/styles']
		}))
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('./dist/src/styles'))
}
