module.exports = function (gulp, $) {

    const sass = require('gulp-sass');
    const sassGlob = require('gulp-sass-glob');


    gulp.task('sass', function () {
        // get only the first level files, as globbing task will pack all css in the first level files
        return gulp.src('./src/*.scss')
            .pipe(sassGlob())
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'));
    });

};
