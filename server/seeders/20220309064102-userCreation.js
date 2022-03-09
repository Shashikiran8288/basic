'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    
    return queryInterface.bulkInsert('Users', [{
      first_name : "Dev",
      last_name : "Admin",
      email : "devadmin@gmail.com",
      password : await bcrypt.hash("password", salt)
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
