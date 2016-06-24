var path = process.cwd();
var RqHP = require(path + '/app/controllers/requestHeaderParser.js');

module.exports = function (app) {
  var rhp = new RqHP();

  // TODO?: put the forming of json object in a controller...?
  app.get('/', function (req, res) {
    rhp.parse(req, res);
    // res.json({
    //   "ipaddress": req.connection.remoteAddress,
    //   "language":  req.headers['accept-language'].split(',')[0],
    //   // TODO: use useragent parser to get OS
    //   "software": req.headers['user-agent']
    // });
  });
};
