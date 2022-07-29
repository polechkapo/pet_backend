const homeRouter = require('express').Router();
const Home = require('../../views/Home');
const { User } = require('../../db/models');
const { Tweet } = require('../../db/models');

homeRouter.route('/')
  .get(async (req, res) => {
    let user = '';
    if (req.session.userId) {
      user = await User.findOne({ where: { id: req.session.userId } });
    }
    const tweets = await Tweet.findAll({
      order: [
        ['id', 'DESC'],
      ],
      include: [Tweet.User],
      raw: true,
    });
    res.renderComponent(Home, { user, tweets });
  });

module.exports = homeRouter;
