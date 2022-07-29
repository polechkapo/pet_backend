const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Tweet.User = Tweet.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' });
    }
  }
  Tweet.init({
    picture: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    message: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    likes: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};
