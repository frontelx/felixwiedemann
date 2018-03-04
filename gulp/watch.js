module.exports = function (gulp, $) {

    const watch = require('gulp-watch');

    gulp.task('watch', function () {
        gulp.watch('src/**/*.scss' , ['css:dev']);
        gulp.watch('src/**/*.html' , ['copy:html']);
        gulp.watch('src/images/**/*' , ['copy:images']);
    });

};
