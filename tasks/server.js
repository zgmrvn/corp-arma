var browserSync = require('browser-sync').create('dev-serv');

module.exports = function(){
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	})
}
