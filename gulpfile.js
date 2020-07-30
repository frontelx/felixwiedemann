const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const taskPath = './gulp/';

// async readdir does not identify task names
const taskList = require('fs').readdirSync(taskPath);

taskList.forEach(function (taskFile) {
    require(taskPath + taskFile)(gulp, plugins);
});

// Copy task
gulp.task('copy', ['copy:content', 'copy:images', 'copy:fonts', 'copy:favicon', 'copy:favicondark', 'copy:htaccess', 'copy:robots']);
