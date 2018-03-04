module.exports = function (gulp, $) {

    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');
    // use cssnano for minifying
    const cssnano = require('cssnano');
    const pxtorem = require('postcss-pxtorem');

    // Development processes
    gulp.task('postcss:dev', ['sass'], function () {
        const plugins = [
            autoprefixer({
                browsers: ['last 3 version', 'IE 11'],
            }),
            pxtorem(),
        ];

        return gulp.src('./dist/css/*.css')
            .pipe(postcss(plugins))
            .pipe(gulp.dest('./dist/css'));
    });

    // Production processes
    gulp.task('postcss:prod', ['postcss:dev'], function () {
        const plugins = [
            cssnano(),
        ];

        return gulp.src('./dist/css/*.css')
            .pipe(postcss(plugins))
            .pipe(gulp.dest('./dist/css'));
    });

};
