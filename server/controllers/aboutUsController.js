const keystone = require('keystone');
const AboutUs = keystone.list('AboutUs');

module.exports = {
  getAboutUsController(req, res) {
    AboutUs.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}
