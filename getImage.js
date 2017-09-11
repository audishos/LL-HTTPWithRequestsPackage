const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log("Status code:", response && response.statusCode);
    console.log("Content type:" + response.headers['content-type']);
    console.log('Downloading image...');
  })
  .on('end', function() {
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
