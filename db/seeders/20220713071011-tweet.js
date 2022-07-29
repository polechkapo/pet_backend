module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Tweets',
      [{
        picture: 'https://picsum.photos/200/300',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt repudiandae doloremque illo neque sint dignissimos. Blanditiis possimus nemo harum sequi amet iste totam atque eos provident. Officiis, ipsum ducimus!',
        user_id: 1,
        likes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'https://picsum.photos/200/300',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt repudiandae doloremque illo neque sint dignissimos. Blanditiis possimus nemo harum sequi amet iste totam atque eos provident. Officiis, ipsum ducimus!',
        user_id: 2,
        likes: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'https://picsum.photos/200/300',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt repudiandae doloremque illo neque sint dignissimos. Blanditiis possimus nemo harum sequi amet iste totam atque eos provident. Officiis, ipsum ducimus!',
        user_id: 1,
        likes: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'https://picsum.photos/200/300',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt repudiandae doloremque illo neque sint dignissimos. Blanditiis possimus nemo harum sequi amet iste totam atque eos provident. Officiis, ipsum ducimus!',
        user_id: 3,
        likes: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'https://picsum.photos/200/300',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt repudiandae doloremque illo neque sint dignissimos. Blanditiis possimus nemo harum sequi amet iste totam atque eos provident. Officiis, ipsum ducimus!',
        user_id: 4,
        likes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        picture: 'https://picsum.photos/200/300',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt repudiandae doloremque illo neque sint dignissimos. Blanditiis possimus nemo harum sequi amet iste totam atque eos provident. Officiis, ipsum ducimus!',
        user_id: 5,
        likes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tweets', null, { restartIdentity: true, truncate: true });
  },
};
