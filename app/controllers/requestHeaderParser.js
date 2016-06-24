function RequestHeaderParser () {
  // TODO: let parse function accept array or string of options to parse
  this.parse = function (req, res) {
    // res.json(headers);

    res.json({
      "ipaddress": this.parseIPaddress(req, res, true),
      "language":  this.parseLanguage(req, res, true),
      "software":  this.parseSoftware(req, res, true)
    });
  };

  this.parseIPaddress = function (req, res, dontRespond) {
    var ip = req.connection.remoteAddress;

    if (dontRespond)
      return ip;

    res.json({"ipaddress": ip});
  };

  this.parseLanguage = function (req, res, dontRespond) {
    var language = req.headers['accept-language'].split(',')[0];

    if (dontRespond)
      return language;

    res.json({"language": language});
  };

  this.parseSoftware = function (req, res, dontRespond) {
    // TODO
    if (dontRespond)
      return null;

    res.json({"software": null});
  };
}

module.exports = RequestHeaderParser;
