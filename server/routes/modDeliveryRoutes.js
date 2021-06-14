const modDeliveryController = require('../controllers/modDeliveryController');

module.exports = (app) => {
  app.get('/api/modDelivery', modDeliveryController.getModDeliveryController);
};
