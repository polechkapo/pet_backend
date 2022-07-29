const router = require('express').Router();
const { User } = require('../../db/models');
const Cabinet = require('../../views/Cabinet.jsx');
const { Tweet } = require('../../db/models');

router.route('/:id')
  .get(async (req, res) => {
    if (!req.session.userId) {
      res.redirect('/auth/login');
      return;
    }
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      const tweets = await Tweet.findAll({
        where: {
          user_id: user.id,
        },
        order: [
          ['id', 'DESC'],
        ],
      });
      console.log(tweets);
      res.renderComponent(Cabinet, { user, tweets });
    }
  });

module.exports = router;
