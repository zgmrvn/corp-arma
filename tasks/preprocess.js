var gulp = require('gulp')
var plumber = require('gulp-plumber')
var es = require('event-stream')
var preprocess = require('gulp-preprocess')
var rename = require('gulp-rename')

module.exports = function(){
	let data = [
		{
			src: './dist/index.html',
			dest: './dist'
		},
		{
			src: './dist/about/index.html',
			dest: './dist/about'
		}
	]

	var streams = data.map(function(page) {
		return gulp
			.src(page.src)
			.pipe(plumber())
			.pipe(preprocess({
				context: {
					MODE: (process.argv[2] == 'build') ? 'build' : 'dev',
					DEBUG: true
				}
			}))
			.pipe(gulp.dest(page.dest))
	})

	return es.merge(streams)
}
