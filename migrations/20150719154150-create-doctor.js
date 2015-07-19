'use strict';
var models  = require('../models');
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function(){
        models.Doctor.bulkCreate({'name':'Amit Kumar'})
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Doctors');
  }
};