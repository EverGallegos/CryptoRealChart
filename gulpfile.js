var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('watch', function(){
  gulp.watch('html/index.html', '');
})
gulp.task('default', ['watch']);
