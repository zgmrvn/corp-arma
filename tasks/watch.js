var gulp = require('gulp')
var gulpSequence = require('gulp-sequence').use(gulp)
var browserSync = require('browser-sync').get('dev-serv')

module.exports = function(){
	gulp.watch('assets/partials/*.ejs', function(event){
		gulpSequence('ejs', 'preprocess')(function(err){
			if (err) console.log(err)
		})
	})

	gulp.watch('assets/styles/*.less', ['less'])
	browserSync.watch('./dist/index.html').on('change', browserSync.reload)
	browserSync.watch('./dist/about/index.html').on('change', browserSync.reload)
	browserSync.watch('./dist/src/styles/*.css').on('change', browserSync.reload)
}
