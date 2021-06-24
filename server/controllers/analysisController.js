const keystone = require('keystone');

const Analysis = keystone.list('Analysis');

module.exports = {
  getAnalysisController(req, res) {
    Analysis.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}
