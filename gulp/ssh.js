const fs = require('fs');
const GulpSSH = require('gulp-ssh');

const remotePath = './webseiten/felixwiedemann-2018';
const remotePathTemp = `${remotePath}-temp`;
const uploadConfigPath = 'upload.config.json';
const uploadPackage = 'upload.zip';

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

        // Remove temporary upload directory
        gulp.task('ssh:clean', function () {
            return gulpSSH
                .shell([
                    `rm -rf ${remotePathTemp}`,
                ])
        });

        // Uploads zipped package to temporary server folder
        gulp.task('ssh:upload', ['ssh:clean'], function () {
            return gulp
                .src([`./upload/${uploadPackage}`])
                .pipe(gulpSSH.dest(`${remotePathTemp}`));
        });

        // Extracts the package files
        gulp.task('ssh:extract', ['ssh:upload'], function () {
            return gulpSSH
                .shell([
                    `cd ${remotePathTemp}`,
                    `unzip ${uploadPackage}`,
                    `rm -f ${uploadPackage}`,
                ])
        });

        // Switches old dist folder from server with new deployment
        gulp.task('ssh:deploy', ['ssh:extract'], function () {
            return gulpSSH
                .shell([
                    `rm -rf ${remotePath}`,
                    `mv ${remotePathTemp} ${remotePath}`
                ]);
        });
    }

};
