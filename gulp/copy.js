module.exports = function (gulp, $) {

    gulp.task('copy:content', function () {
        return gulp.src('./content/**/*')
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

    gulp.task('copy:favicon', function () {
        return gulp.src('./src/favicon.ico')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:htaccess', function () {
        return gulp.src('./src/.htaccess')
            .pipe(gulp.dest('./dist'));
    });

};
