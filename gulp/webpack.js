const webpack = require('webpack-stream');

module.exports = function (gulp, $) {

    gulp.task('webpack', function () {
        return gulp.src('src/main.js')
            .pipe(webpack({
                    config: require('../webpack.config.js'),
                    watch: true,
                },
                require('webpack'),
            ))
            .pipe(gulp.dest('dist'));
    });

};
