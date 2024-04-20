const { v4: uuidv4 } = require('uuid');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userIds = await queryInterface.sequelize.query(
      'SELECT id FROM Users'
    );

    const ordersData = [
      { "id": uuidv4(), "product_name": "shoe", "quantity": "1", userId: userIds[0][0].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "bag", "quantity": "2", userId: userIds[0][1].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "fan", "quantity": "3", userId: userIds[0][2].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "car", "quantity": "4", userId: userIds[0][3].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "pillow", "quantity": "5", userId: userIds[0][4].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "egg", "quantity": "6", userId: userIds[0][5].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "tree", "quantity": "7", userId: userIds[0][6].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "ass", "quantity": "8", userId: userIds[0][7].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "book", "quantity": "9", userId: userIds[0][8].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "short", "quantity": "10", userId: userIds[0][9].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "charger", "quantity": "1", userId: userIds[0][0].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "pen", "quantity": "2", userId: userIds[0][1].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "camera", "quantity": "3", userId: userIds[0][2].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "flipflops", "quantity": "4", userId: userIds[0][3].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "keys", "quantity": "5", userId: userIds[0][4].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "keyboard", "quantity": "6", userId: userIds[0][5].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "mouse", "quantity": "7", userId: userIds[0][6].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "battery", "quantity": "8", userId: userIds[0][7].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "wire", "quantity": "9", userId: userIds[0][8].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "heels", "quantity": "10", userId: userIds[0][9].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "nike", "quantity": "1", userId: userIds[0][0].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "pole", "quantity": "2", userId: userIds[0][1].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "bottle", "quantity": "3", userId: userIds[0][2].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "pot", "quantity": "4", userId: userIds[0][3].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "pan", "quantity": "5", userId: userIds[0][4].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "phone", "quantity": "6", userId: userIds[0][5].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "samsung", "quantity": "7", userId: userIds[0][6].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "tecno", "quantity": "8", userId: userIds[0][7].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "novel", "quantity": "9", userId: userIds[0][8].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "short", "quantity": "10", userId: userIds[0][9].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "shoe", "quantity": "1", userId: userIds[0][0].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "bag", "quantity": "2", userId: userIds[0][1].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "crocs", "quantity": "3", userId: userIds[0][2].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "cap", "quantity": "4", userId: userIds[0][3].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "necklace", "quantity": "5", userId: userIds[0][4].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "earings", "quantity": "6", userId: userIds[0][5].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "tree", "quantity": "7", userId: userIds[0][6].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "dildo", "quantity": "8", userId: userIds[0][7].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "book", "quantity": "9", userId: userIds[0][8].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "net", "quantity": "10", userId: userIds[0][9].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "iron", "quantity": "1", userId: userIds[0][0].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "perfume", "quantity": "2", userId: userIds[0][1].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "bulb", "quantity": "3", userId: userIds[0][2].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "car", "quantity": "4", userId: userIds[0][3].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "pillow", "quantity": "5", userId: userIds[0][4].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "egg", "quantity": "6", userId: userIds[0][5].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "skiboots", "quantity": "7", userId: userIds[0][6].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "trainers", "quantity": "8", userId: userIds[0][7].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "book", "quantity": "9", userId: userIds[0][8].id, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": uuidv4(), "product_name": "T-shirt", "quantity": "10", userId: userIds[0][9].id, "createdAt": new Date(), "updatedAt": new Date() },

    ];

    await queryInterface.bulkInsert('Orders', ordersData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
