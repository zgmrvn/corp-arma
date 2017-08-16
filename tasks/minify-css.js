var gulp = require('gulp')
var plumber = require('gulp-plumber')
var es = require('event-stream')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')

module.exports = function(){
	let data = [
		'./dist/src/styles/styles.css',
		'./dist/src/styles/about.css'
	]
	
	var streams = data.map(function(style) {
		return gulp
			.src(style)
			.pipe(plumber())
			.pipe(cleanCSS())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest('./dist/src/styles'))
	})

	return es.merge(streams)
}
