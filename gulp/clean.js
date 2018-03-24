const del = require('del');

module.exports = function (gulp, $) {

    gulp.task('clean:dist', function () {
        return del([
            'dist/**/*',
        ]);
    });

};
