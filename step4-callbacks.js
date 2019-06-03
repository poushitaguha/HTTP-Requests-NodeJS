var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  /* Add your code here */
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

}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);