const path = require('path');
const cors = require('cors');

const bannerController = require('../controllers/bannerController');
const developmentController = require('../controllers/developmentController');
const postController = require('../controllers/postController');
const mDeliveryController = require('../controllers/mDeliveryController');
const analysisController = require('../controllers/analysisController');
const aboutUsController = require('../controllers/aboutUsController');
const contactController = require('../controllers/contactController');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController.getPostController);

  app.get('/api/banner', bannerController.getBannerController);
  
  app.get('/api/aboutus', aboutUsController.getAboutUsController);

  app.get('/api/development', developmentController.getDevelopmentController);

  app.get('/api/mdelivery', mDeliveryController.getMDeliveryController);

  app.get('/api/analysis', analysisController.getAnalysisController);

  app.get('/api/contact', contactController.getContactController);

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};