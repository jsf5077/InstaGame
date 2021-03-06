var chai = require("chai");
// var mocha = require("mocha");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;
// var describe = mocha.describe;
// var beforeEach = mocha.beforeEach;
// var it = mocha.it;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/posts", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    db.Post.bulkCreate([
      {
        genre: "a",
        name: "a",
        console: "a",
        screenname: "a",
        game: "a",
        post: "a"
      },
      {
        genre: "b",
        name: "b",
        console: "b",
        screenname: "b",
        game: "b",
        post: "b"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/posts").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            genre: "a",
            name: "a",
            console: "a",
            screenname: "a",
            game: "a",
            post: "a"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            genre: "b",
            name: "b",
            console: "b",
            screenname: "b",
            game: "b",
            post: "b"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
