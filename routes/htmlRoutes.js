var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      // console.log(dbPosts);
      var sortedPost = dbPosts.sort(function(a, b) {
        console.log("updatedAt", a.updatedAt);
        if (a.updatedAt < b.updatedAt) {
          return 1;
        }
        if (a.updateAt > b.updatedAt) {
          return -1;
        }
        return 0;
      });
      res.render("index", {
        msg: "Welcome!",
        posts: sortedPost
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
