var https = require('https');

module.exports = function getHTML (options, callback) {
  let bufferedString = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      bufferedString += data;
    });

   response.on('end', function() {
    callback(bufferedString);
    console.log('Response stream complete.');
  });

  });
};