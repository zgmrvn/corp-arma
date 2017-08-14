var gulp = require('gulp')
var plumber = require('gulp-plumber')
var preprocess = require('gulp-preprocess')
var rename = require('gulp-rename')

module.exports = function(){
	return gulp
		.src('./dist/*.html')
		.pipe(plumber())
		.pipe(preprocess({
			context: {
				MODE: (process.argv[2] == 'build') ? 'build' : 'dev',
				DEBUG: true
			}
		}))
		.pipe(gulp.dest('./dist'))
}
