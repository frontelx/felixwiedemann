module.exports = function (gulp, $) {

    gulp.task('copy:html', ['clean:dist'], function () {
        return gulp.src('./src/index.html')
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('copy:content', ['clean:dist'], function () {
        return gulp.src('./content/**/*')
            .pipe(gulp.dest('./dist/content'));
    });

    gulp.task('copy:images', ['clean:dist'], function () {
        return gulp.src('./src/images/**/*')
            .pipe(gulp.dest('./dist/images'));
    });

    gulp.task('copy:fonts', ['clean:dist'], function () {
        return gulp.src('./src/fonts/**/*')
            .pipe(gulp.dest('./dist/fonts'));
    });

    gulp.task('copy:favicon', ['clean:dist'], function () {
        return gulp.src('./src/favicon.ico')
            .pipe(gulp.dest('./dist'));
    });

};
