'use strict';

/** @type {import('sequelize-cli').Migration} */
const models = require ('../models/index')
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.tratamiento.findOrCreate({
        where:{
          id:"4"
        },
        defaults:{
          descripcion:"ecografia mamaria",
          complejidad:"media"
        }
      }),
      models.tratamiento.findOrCreate({
        where:{
          id:"5"
        },
        defaults:{
          descripcion:"ecografia ginecologica",
          complejidad:"media"
        }
      }),
      models.tratamiento.findOrCreate({
        where:{
          id:"6"
        },
        defaults:{
          descripcion:"ecografia de brazo",
          complejidad:"alta"
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
