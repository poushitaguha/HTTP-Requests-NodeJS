var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  /* Add your code here */
  let bufferedString = "";

// https.get(requestOptions, function (response) {
https.get(options, function (response) {

  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    bufferedString += data;
  });

  response.on('end', function() {
    console.log(bufferedString);
    console.log('Response stream complete.');
  });

});

}

console.log(getAndPrintHTML(requestOptions));