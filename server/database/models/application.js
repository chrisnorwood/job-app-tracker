'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    url: DataTypes.STRING,
    source: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});

  Application.associate = function(models) {
    Application.belongsTo(models.User);
  };

  return Application;
};
