'use strict';
const models = require ('../models/index')

module.exports = {
  up: function (queryInterface, Sequelize) {

    return Promise.all([
      models.medico.findOrCreate({
        where:{
          id:"5"
        },
        defaults:{
          nombre:"Rodrigo",
          apellido:"Matamoros",
          email:"matamoros@gmail.com",
          edad:45,
          especialidad:"pediatria"
        }
      }),
      models.medico.findOrCreate({
        where:{
          id:"6"
        },
        defaults:{
          nombre:"Luciana",
          apellido:"Cinalli",
          email:"lucinalli@gmail.com",
          edad:45,
          especialidad:"obstetricia"
        }
      })
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
