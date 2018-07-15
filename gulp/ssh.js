const fs = require('fs');
const GulpSSH = require('gulp-ssh');

const remotePath = './webseiten/felixwiedemann-2018';
const uploadConfigPath = 'upload.config.json';

const serverConfig = fs.existsSync(uploadConfigPath) ? require(`../${uploadConfigPath}`) : false;

module.exports = function (gulp, $) {

    // Prevents running the task if no serverConfig file is available
    gulp.task('ssh:check', function () {
        if (!serverConfig) {
            console.error(`ERROR: ${uploadConfigPath} missing`);
            console.error(`To upload the files to the server you need a ${uploadConfigPath} file with the server credentials in the project root.`);

            process.exit(1);
        }
    });

    if (serverConfig) {
        const gulpSSH = new GulpSSH({
            ignoreErrors: false,
            sshConfig: serverConfig,
        });

        // Uploads dist files to temporary server folder
        gulp.task('ssh:upload', function () {
            return gulp
                .src(['./dist/**/*', './dist/.*'])
                .pipe(gulpSSH.dest(`${remotePath}-temp`));
        });

        // Switches old dist folder from server with new deployment
        gulp.task('ssh:deploy', ['ssh:upload'], function () {
            return gulpSSH
                .shell([`rm -rf ${remotePath}`, `mv ${remotePath}-temp ${remotePath}`]);
        });
    }

};
