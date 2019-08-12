// Get references to page elements
var $submitBtn = $("#submit");
var $postList = $("#post-list");
var $nameText = $("#name-text");
var $titleText = $("#title-text");
var $consoleText = $("#console-text");
var $snText = $("#sn-text");
var $gameText = $("#game-text");
var $postDescription = $("#post-description");
var $genreGame = $("#genre-game");

// The API object contains methods for each kind of request we'll make
var API = {
  savePost: function(post) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/posts",
      data: JSON.stringify(post)
    });
  },
  getPosts: function() {
    return $.ajax({
      url: "api/posts",
      type: "GET"
    });
  },
  deletePost: function(id) {
    return $.ajax({
      url: "api/posts/" + id,
      type: "DELETE"
    });
  }
};

// refreshPosts gets new examples from the db and repopulates the list
var refreshPosts = function() {
  API.getPosts().then(function(data) {
    console.log(data);
    var $posts = data.map(function(post) {
      var $a = $("<a>")
        .text(post.title)
        .attr("href", "/post/" + post.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": post.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $postList.empty();
    $postList.append($posts);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var post = {
    genre: $genreGame.val().trim(),
    title: $titleText.val().trim(),
    name: $nameText.val().trim(),
    console: $consoleText.val().trim(),
    screenname: $snText.val().trim(),
    game: $gameText.val().trim(),
    post: $postDescription.val().trim()
  };

  if (
    !(
      post.genre &&
      post.title &&
      post.name &&
      post.console &&
      post.game &&
      post.post
    )
  ) {
    alert("You must enter in the required fields!");
    return;
  }

  API.savePost(post).then(function() {
    refreshPosts();
  });

  $genreGame.val("");
  $titleText.val("");
  $nameText.val("");
  $consoleText.val("");
  $snText.val("");
  $gameText.val("");
  $postDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletePost(idToDelete).then(function() {
    refreshPosts();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$postList.on("click", ".delete", handleDeleteBtnClick);
