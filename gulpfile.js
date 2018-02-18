const gulp     = require('gulp');
const plugins  = require('gulp-load-plugins')();
const taskPath = './gulp/';

// async readdir does not identify task names
const taskList = require('fs').readdirSync(taskPath);

taskList.forEach(function (taskFile) {
    require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('dev', ['css:dev']);
gulp.task('prod', ['css:prod']);

gulp.task('css:dev', ['sass', 'postcss:dev']);
gulp.task('css:prod', ['sass', 'postcss:dev', 'postcss:prod']);