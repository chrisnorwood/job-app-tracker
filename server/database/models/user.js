'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Application, { foreignKey: 'userId' });
  };

  return User;
};
