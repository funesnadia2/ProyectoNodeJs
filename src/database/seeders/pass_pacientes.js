'use strict';

const models = require ('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.paciente.findOrCreate({
        where:{
          id:"1"
        },
        defaults:{
          nombre:"Juan",
          apellido:"Baldini",
          email:"baldini@gmail.com",
          edad:49,
          password: bcrypt.hashSync('password',10)
        }
      }),
      models.paciente.findOrCreate({
        where:{
          id:"2"
        },
        defaults:{
          nombre:"Lorena",
          apellido:"Molina",
          email:"lorem@gmail.com",
          edad:49,
          password: bcrypt.hashSync('hola',10)
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

