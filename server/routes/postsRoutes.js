const postController = require('../controllers/postController');

module.exports = (app) => {
  app.get('/api/posts', postController.getPostController);
};