const bannerController = require('../controllers/bannerController');

module.exports = (app) => {
  app.get('/api/banner', bannerController.getPostController);
};