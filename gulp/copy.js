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
        return gulp.src('./src/favicon.png')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:favicondark', function () {
        return gulp.src('./src/favicon-dark.png')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:htaccess', function () {
        return gulp.src('./src/.htaccess')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:robots', function () {
        return gulp.src('./src/robots.txt')
            .pipe(gulp.dest('./dist'));
    });

};
