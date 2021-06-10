const path = require('path');
const cors = require('cors');

const bannerController = require('../controllers/bannerController');
const developmentController = require('../controllers/developmentController');
const postController = require('../controllers/postController');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController.getPostController);

  app.get('/api/banner', bannerController.getBannerController);

  app.get('/api/development', developmentController.getDevelopmentController);

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};
