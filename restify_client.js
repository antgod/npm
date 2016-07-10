var assert = require('assert');
var restify = require('restify');

var client = restify.createJsonClient({
    url: 'http://localhost:8080',
    version: '~1.0'
});

//client.get('/echo/mark', function (err, req, res, obj) {
//    //assert.ifError(err);
//   // console.log('Server returned: %j', obj);
//});

client.post('/echo/mark', { hello: 'world' }, function(err, req, res, obj) {
    assert.ifError(err);
    console.log('%d -> %j', res.statusCode, res.headers);
    console.log('%j', obj);
});