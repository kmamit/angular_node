'use strict';
module.exports = function(sequelize, DataTypes) {
  var Doctor = sequelize.define('Doctor', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Doctor.hasMany(models.Assistant)
      }
    }
  });
  return Doctor;
};