var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var exec = require('child_process').exec;
 
gulp.task('build', function() {
  gulp.src('./client/index.js', { read: false })
    .pipe(browserify({
      transform: ['babelify', 'jadeify', 'lessify'],
      extensions: ['.less', '.jade']
    }))
    .pipe(ngAnnotate())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./public'))
});

gulp.task('db', function (cb) {
  exec('rethinkdb', execError);
});

gulp.task('server', function (cb) {
	exec('node_modules/.bin/nodemon --harmony --watch server.js', execError);
});

gulp.task('default', ['db', 'server', 'build', 'watch']);

gulp.task('watch', function () {
   gulp.watch('./client/**/*.*', ['build']);
});


function execError(err, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  cb(err);
}