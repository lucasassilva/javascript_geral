exports.show = (req, res) => {
   const User = res.locals.models.users;
   User.find().then(data => {
      res.render("index", { users: data});
   }).catch(err => {
      res.json({
         err: err
      });
   });
};

exports.create = (req, res) => {
   const User = res.locals.models.users;
   User.create({
      name: req.body.user
   }).then(() => {
      res.redirect("/");
   }).catch(err => {
      res.json({
         err: err
      })
   });
};