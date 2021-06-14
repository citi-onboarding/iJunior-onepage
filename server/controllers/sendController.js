const keystone = require('keystone');

const Send = keystone.list('Send');

module.exports = {
  getSendController(req, res) {
    Send.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}
