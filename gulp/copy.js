module.exports = function (gulp, $) {

    gulp.task('copy:html', function () {
        return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:images', function () {
        return gulp.src('./src/images/**/*')
            .pipe(gulp.dest('./dist/images'));
    });

};
