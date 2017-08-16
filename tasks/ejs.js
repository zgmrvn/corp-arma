var gulp = require('gulp')
var plumber = require('gulp-plumber')
var es = require('event-stream')
var ejs = require('gulp-ejs')
var rename = require('gulp-rename')

module.exports = function(){
	let data = [
		{
			src: './assets/partials/index.ejs',
			dest: './dist'
		},
		{
			src: './assets/partials/about.ejs',
			dest: './dist/about'
		}
	]

	var streams = data.map(function(page) {
		return gulp
			.src(page.src)
			.pipe(plumber())
			.pipe(ejs())
			.pipe(rename('index.html'))
			.pipe(gulp.dest(page.dest))
	})

	return es.merge(streams)
}
