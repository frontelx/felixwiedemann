const gulp     = require('gulp');
const plugins  = require('gulp-load-plugins')();
const taskPath = './gulp/';

// async readdir does not identify task names
const taskList = require('fs').readdirSync(taskPath);

taskList.forEach(function (taskFile) {
    // or .call(gulp,...) to run this.task('foobar')...
    require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('css', [ 'sass', 'postcss:dev']);
gulp.task('dev', [ 'css']);