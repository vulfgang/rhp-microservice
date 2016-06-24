var path = process.cwd();

module.exports = function (app) {
  // TODO?: put the forming of json object in a controller...?
  app.get('/', function (req, res) {
    res.json({
      "ipaddress": req.connection.remoteAddress,
      "language":  req.headers['accept-language'].split(',')[0],
      // TODO: use useragent parser to get OS
      "software": req.headers['user-agent']
    });
  });
};
