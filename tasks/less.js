var gulp = require('gulp')
var plumber = require('gulp-plumber')
var es = require('event-stream')
var less = require('gulp-less')
var rename = require('gulp-rename')

module.exports = function(){
	let data = [
		{
			src: './assets/styles/importer.less',
			name: 'styles.css'
		},
		{
			src: './assets/styles/about.less',
			name: 'about.css'
		}
	]

	var streams = data.map(function(style) {
		return gulp
			.src(style.src)
			.pipe(plumber())
			.pipe(less({
				paths: ['./assets/styles']
			}))
			.pipe(rename(style.name))
			.pipe(gulp.dest('./dist/src/styles'))
	})

	return es.merge(streams)
}
