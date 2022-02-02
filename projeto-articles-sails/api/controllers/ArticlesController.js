/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  show: function (req, res) {
    Articles.find().exec((err, article) => {
      if (err) {
        return (err).status(500);
      }
      return res.json(article).status(200);
    });
  },

  create: function (req, res) {
    Articles.create({
      title: req.body.title,
      body: req.body.body,
    }).fetch().exec((err, article) => {
      if (err) {
        return (err).status(500);
      }
      return res.json(article).status(200);
    });
  },

  update: function (req, res) {
    Articles.update({'id': req.params.id}).set({
      title: req.body.title,
      body: req.body.body
    }).fetch().exec((err, article) => {
      if (err) {
        return (err).status(500);
      }
      return res.json(article).status(200);
    });
  },

  delete: function(req, res) {
    Articles.destroy({'id': req.params.id})
    .fetch().exec((err, article) => {
      if (err) {
        return (err).status(500);
      }
      return res.json(article).status(200);
    });
  }

};

