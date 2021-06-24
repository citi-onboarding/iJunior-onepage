const keystone = require('keystone');

const Contact = keystone.list('Contact');

module.exports = {
  getContactController(req, res) {
    Contact.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}