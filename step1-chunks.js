function getAndPrintHTMLChunks () {

var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    console.log('Data', data, '\n');
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

console.log(getAndPrintHTMLChunks());