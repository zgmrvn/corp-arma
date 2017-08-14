var gulp = require('gulp')
var gulpSequence = require('gulp-sequence').use(gulp)

// dev tasks
gulp.task('ejs', require('./tasks/ejs'))
gulp.task('preprocess', require('./tasks/preprocess'))
gulp.task('less', require('./tasks/less'))
gulp.task('server', require('./tasks/server'))
gulp.task('watch', require('./tasks/watch'))

gulp.task('html', gulpSequence('ejs', 'preprocess'))

gulp.task('default', [
	'html',
	'less',
	'server',
	'watch'
])

// build tasks
gulp.task('minify-css', require('./tasks/minify-css'))

gulp.task('css', gulpSequence('less', 'minify-css'))

gulp.task('build', [
	'html',
	'css',
])
