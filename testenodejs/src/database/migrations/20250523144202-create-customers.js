'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('customers', {
	     id: {
		     type: Sequelize.INTEGER,
		     allowNull: false,
		     autoIncrement: true,
		     primaryKey: true,
	     },
	     name: {
		     type: Sequelize.STRING,
		     allowNull: false,
	     },
	     email: {
		     type: Sequelize.STRING,
		     allowNull: false,
		     unique: true,
	     },
	     created_at: {
		     type: Sequelize.DATE,
		     allowNull: false,
	     },
	     update_at: {
		     type: Sequelize.DATE,
		     allowNull: false,
	     },
     });
  },

  async down (queryInterface) {
     await queryInterface.dropTable('customers');
  }
};
