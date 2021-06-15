const keystone = require('keystone');

const MDelivery = keystone.list('MDelivery');

module.exports = {
  getMDeliveryController(req, res) {
    MDelivery.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}