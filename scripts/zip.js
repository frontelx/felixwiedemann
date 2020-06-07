const fs = require('fs');
const archiver = require('archiver');
const archive = archiver('zip', {
  zlib: { level: 9 },
});

const exportDir = './upload';
const exportPath = `${exportDir}/upload.zip`;

if (!fs.existsSync(exportDir)){
    fs.mkdirSync(exportDir);
}

const fileOutput = fs.createWriteStream(exportPath);

console.log('Zipping the upload');

fileOutput.on('close', function () {
    console.log((archive.pointer() / 1048576).toFixed(0) + ' MB zipped');
});

archive.pipe(fileOutput);
archive.directory('./dist', false);
archive.on('error', function(err){
    throw err;
});
archive.finalize();
