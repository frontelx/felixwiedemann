module.exports = function (gulp, $) {

    gulp.task('copy:html', function () {
        return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:content', function () {
        return gulp.src('./src/content/**/*')
            .pipe(gulp.dest('./dist/content'));
    });

    gulp.task('copy:images', function () {
        return gulp.src('./src/images/**/*')
            .pipe(gulp.dest('./dist/images'));
    });

    gulp.task('copy:fonts', function () {
        return gulp.src('./src/fonts/**/*')
            .pipe(gulp.dest('./dist/fonts'));
    });

};
