'use strict';

const gulp = require('gulp');
const reactEasy = require('gulp-react-easy');

gulp.task('default', ['js', 'w']);
gulp.task('w',() => {
  gulp.watch('build/jsx/**/*', ['js']);
});
gulp.task('js', () => {
  return reactEasy({
    'file': './build/jsx/app.jsx',
    'debug': true
  })
  .to('app.js')
  .pipe(gulp.dest('./public/js/'));
});