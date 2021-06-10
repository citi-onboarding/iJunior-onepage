const keystone = require('keystone');

const Banner = keystone.list('Banner');

module.exports = {
  getBannerController(req, res) {
    Banner.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}
