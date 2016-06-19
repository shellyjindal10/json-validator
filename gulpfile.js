var gulp = require('gulp')
var jsonlint = require('gulp-jsonlint')

gulp.task('default', function(){
  console.log('Gulp task is running!!!')
})

gulp.task('json-validation', function(){
  return gulp.src('./schemas/*.json')
    .pipe(jsonlint())
    .pipe(jsonlint.reporter())
})
