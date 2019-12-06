'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    location: DataTypes.STRING,
    url: DataTypes.STRING,
    source: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});

  Application.associate = function(models) {
    Application.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Application;
};
