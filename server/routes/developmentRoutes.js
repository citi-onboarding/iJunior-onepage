const developmentController = require('../controllers/developmentController');

module.exports = (app) => {
  app.get('/api/development', developmentController.getDevelopmentController);
};
