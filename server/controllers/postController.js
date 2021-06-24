const keystone = require('keystone');

const Post = keystone.list('Posts');

module.exports = {
  getPostController(req, res) {
    Post.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}