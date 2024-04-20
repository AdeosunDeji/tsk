const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    const seedData = [
      { "id": uuidv4(), "username": "user1", "email": "user1@example.com", "password": "password1" },
      { "id": uuidv4(), "username": "user2", "email": "user2@example.com", "password": "password2" },
      { "id": uuidv4(), "username": "user3", "email": "user3@example.com", "password": "password3" },
      { "id": uuidv4(), "username": "user4", "email": "user4@example.com", "password": "password3" },
      { "id": uuidv4(), "username": "user5", "email": "user5@example.com", "password": "password4" },
      { "id": uuidv4(), "username": "user6", "email": "user6@example.com", "password": "password5" },
      { "id": uuidv4(), "username": "user7", "email": "user7@example.com", "password": "password6" },
      { "id": uuidv4(), "username": "user8", "email": "user8@example.com", "password": "password7" },
      { "id": uuidv4(), "username": "user9", "email": "user9@example.com", "password": "password8" },
      { "id": uuidv4(), "username": "user10", "email": "user10@example.com", "password": "password9" }
    ];

    const hashedSeedData = await Promise.all(seedData.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    }));

    await queryInterface.bulkInsert('Users', hashedSeedData, {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
