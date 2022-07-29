const router = require('express').Router();
const { Tweet } = require('../../db/models');
const EditTweet = require('../../views/EditTweet.jsx');
const { User } = require('../../db/models');

router.route('/:id/edit')
  .get(async (req, res) => {
    if (!req.session.userId) {
      res.redirect('/auth/login');
      return;
    }
    let user = '';
    if (req.session.userId) {
      user = await User.findOne({ where: { id: req.session.userId } });
    }
    const tweetId = req.params.id;
    const tweet = await Tweet.findByPk(tweetId);
    res.renderComponent(EditTweet, { tweet, user });
  });

module.exports = router;
