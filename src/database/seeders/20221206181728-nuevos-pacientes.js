'use strict';

/** @type {import('sequelize-cli').Migration} */
const models = require ('../models/index')
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.paciente.findOrCreate({
        where:{
          id:"5"
        },
        defaults:{
          nombre:"Juan",
          apellido:"Baldini",
          email:"baldini@gmail.com",
          edad:49
        }
      }),
      models.paciente.findOrCreate({
        where:{
          id:"6"
        },
        defaults:{
          nombre:"Raul",
          apellido:"Funes",
          email:"funes@gmail.com",
          edad:67
        }
      }),
      models.paciente.findOrCreate({
        where:{
          id:"7"
        },
        defaults:{
          nombre:"Marta",
          apellido:"Perz",
          email:"perez@gmail.com",
          edad:80
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

