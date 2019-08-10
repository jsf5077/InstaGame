module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    console: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    screenname: {
      type: DataTypes.STRING
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  return Post;
};
