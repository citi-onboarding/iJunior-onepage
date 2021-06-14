const keystone = require('keystone');

const modDelivery = keystone.list('modDelivery');

module.exports = {
  getModDeliveryController(req, res) {
    ModDelivery.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}
