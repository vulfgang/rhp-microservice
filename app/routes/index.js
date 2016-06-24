var path = process.cwd();

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json({
      "ipaddress": null,
      "language": null,
      "software": null
    });
  });
};
