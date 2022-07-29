const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tweet }) {
      User.Tweet = User.hasMany(Tweet, { foreignKey: 'user_id', onDelete: 'cascade' });
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
