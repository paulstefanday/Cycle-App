var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
 
gulp.task('default', function() {
  gulp.src('index.js', { read: false })
    .pipe(browserify({
      transform: ['babelify', 'jadeify', 'lessify'],
      extensions: ['.less', '.jade']
    }))
    .pipe(ngAnnotate())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./build'))
});