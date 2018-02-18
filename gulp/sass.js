module.exports = function (gulp, $) {

    var sass = require('gulp-sass');

    gulp.task('sass', function () {
      return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
    });

};