var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var exec = require('child_process').exec;
var envify = require('envify/custom');
var concat = require('gulp-concat')
var minifyCss = require('gulp-minify-css');
var dist = './public';

gulp.task('css', function() {
  return gulp.src([
      './node_modules/sweetalert/dist/sweetalert.css',
      './client/index.css',
      './node_modules/purecss/build/pure.css'
    ])
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('index.css'))
    .pipe(gulp.dest(dist));
});

gulp.task('build', function() {
  gulp.src('./client/index.js', { read: false })
    .pipe(browserify({
      transform: ['babelify', 'jadeify', ['envify', { ENV: process.env.ENV }]],
      extensions: ['.jade']
    }))
    .pipe(ngAnnotate())
    .pipe(rename('index.js'))
    .pipe(gulp.dest(dist))
});

gulp.task('server', function (cb) {
	exec('node_modules/.bin/nodemon --harmony --watch server.js', function execError(err, stdout, stderr) { console.log(stdout); console.log(stderr); cb(err); });
});

gulp.task('default', ['build', 'css', 'watch']);

gulp.task('watch', function () {
  gulp.watch('./client/**/*.*', ['build', 'css']);
});

