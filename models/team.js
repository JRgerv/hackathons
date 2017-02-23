'use strict';
module.exports = function(sequelize, DataTypes) {
  var team = sequelize.define('team', {
    name: DataTypes.STRING,
    members: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return team;
};