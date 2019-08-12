var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      console.log(dbPosts);
      res.render("index", {
        msg: "Welcome!",
        posts: dbPosts
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/post/:id", function(req, res) {
    db.Post.findOne({ where: { id: req.params.id } }).then(function(dbPost) {
      res.render("post", {
        post: dbPost
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
