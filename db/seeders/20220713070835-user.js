const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [{
        name: 'Polya',
        email: 'polechkapo@yandex.ru',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Леха',
        email: 'lexa@mail.ru',
        password: await bcrypt.hash('34437734834', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Паха',
        email: 'paha@mail.ru',
        password: await bcrypt.hash('34437734834', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Малыха',
        email: 'babe@mail.ru',
        password: await bcrypt.hash('34437734834', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тупой бывший',
        email: 'stupidex  `@mail.ru',
        password: await bcrypt.hash('34437734834', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, { restartIdentity: true, truncate: true });
  },
};
