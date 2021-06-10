const keystone = require('keystone');

const Development = keystone.list('Development');

module.exports = {
  getDevelopmentController(req, res) {
    Development.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}
