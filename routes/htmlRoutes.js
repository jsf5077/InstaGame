var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
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

// var path = require("path");

// module.exports = function(app) {
	
// 	app.get("/survey", function(req, res) {
// 		res.sendFile(path.join(__dirname, "/../public/survey.html"));
// 	});

	
// 	app.use(function(req, res) {
// 		res.sendFile(path.join(__dirname, "/../public/home.html"));
// 	});
// };