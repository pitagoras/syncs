var fs = require('fs');

var formHtml = [
  '<html><body>',
  '<form method="get">',
  'URL: <input type="text" name="url"><br>',
  'Width: <input type="text" name="width" value="320"><br>',
  'Height: <input type="text" name="height" value="480"><br>',
  'Filetype: <select name="ftype">',
  '<option>jpg</option><option>png</option><option>pdf</option>',
  '</select><br>',
  'Wait: <input type="text" name="sleep" value="400"><br>',
  '<input type="submit" value="Get Screenshot">',
  '</form>',
  '</body></html>'
].join('');

function toNumber(str, defaultValue) {
  var n = Number(str);
  if (isNaN(n)) { return defaultValue; }
  return n;
}

function parseQueryString(url) {
  var params = {};
  var qstr = url.split('?', 2)[1];
  if (qstr) {
    var pairs = qstr.split('&');
    for (var i=0; i<pairs.length; i++) {
      var pair = pairs[i].split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
  }
  return params;
}


var port = phantom.args[0];

var server = require('webserver').create();
console.log('server listening port: '+port);
var service = server.listen(port, function (request, response) {
  var params = parseQueryString(request.url);
  if (!params.url) {
    response.statusCode = 200;
    response.write(formHtml);
    response.close();
    return;
  }
  var url = params.url;
  var ftype = params.ftype || 'jpg';
  var width = toNumber(params.width, 320);
  var height = toNumber(params.height, 480);
  var sleep = toNumber(params.sleep, 400);
  var page = new WebPage();
  page.viewportSize = { width: width, height: height };
  page.open(url, function (status) {
    if (status !== 'success') {
      response.statusCode = 500;
      response.write('Unable to load the address!');
      response.close();
    } else {
      setTimeout(function() {
        var file = "/tmp/image_"+ Math.random().toString(36).substring(2, 10) + "." + ftype;
        page.render(file);
        var contentType =
          ftype === 'jpg' ? 'image/jpeg' :
          ftype === 'png' ? 'image/png' :
          ftype === 'pdf' ? 'application/pdf' : 'application/octet-stream';
        response.statusCode = 200;
        response.setHeader("Content-Type", contentType);
        var stream = fs.open(file, "rb");
        response.write(stream.read());
        stream.close();
        fs.remove(file);
        response.close();
      }, sleep);
    }
  });
});