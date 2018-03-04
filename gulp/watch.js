module.exports = function (gulp, $) {

    const watch = require('gulp-watch');

    gulp.task('watch', function () {
        gulp.watch('src/**/*.scss' , ['css:dev']);
    });

};
