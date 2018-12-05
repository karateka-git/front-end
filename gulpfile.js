var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatcss', function () {
 return gulp.src('practice-1/src/styles/*.css')
   .pipe(concat("styles/style.css"))
   .pipe(gulp.dest('build/src/'));
});

gulp.task('transferhtml', function () {
 return gulp.src('practice-1/src/templates/*.html')
   .pipe(gulp.dest('build/src/templates/'));
});

gulp.task('default', ['concatcss','transferhtml']);