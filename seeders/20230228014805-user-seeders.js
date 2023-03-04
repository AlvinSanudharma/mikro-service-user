"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "admin",
          profession: "Admin",
          role: "admin",
          email: "admin@email.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Yein",
          profession: "Front End Developer",
          role: "student",
          email: "yein@email.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
