module.exports = function (gulp, $) {

    const watch = require('gulp-watch');

    gulp.task('watch', function () {
        gulp.start(['dev']);

        gulp.watch('src/**/*.scss' , ['css:dev']);
        gulp.watch('src/**/*.html' , ['copy:html']);
        gulp.watch('src/content/**/*' , ['copy:content']);
        gulp.watch('src/images/**/*' , ['copy:images']);
        gulp.watch('src/fonts/**/*' , ['copy:fonts']);
    });

};
