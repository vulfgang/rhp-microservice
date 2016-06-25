function RequestHeaderParser () {
  // TODO: let parse function accept array or string of options to parse
  this.parse = function (req, res) {
    res.json({
      "ipaddress": this.parseIPaddress(req, res, true),
      "language":  this.parseLanguage(req, res, true),
      "software":  this.parseSoftware(req, res, true)
    });
  };

  this.parseIPaddress = function (req, res, dontRespond) {
    var ip = req.ip;
    ip = ip.slice(ip.indexOf('ffff:') + 5);

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
    var software = req.headers['user-agent'].match(/\(.*?\)/)[0].slice(1, -1);

    if (dontRespond)
      return software;

    res.json({"software": software});
  };
}

module.exports = RequestHeaderParser;
