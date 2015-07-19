'use strict';
module.exports = function(sequelize, DataTypes) {
  var Assistant = sequelize.define('Assistant', {
    name: DataTypes.STRING,
    calendar: DataTypes.INTEGER,
    practice_location: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
          Assistant.belongsTo(models.Doctor);
      }
    }
  });
  return Assistant;
};