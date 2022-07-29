const router = require('express').Router();
const { Tweet } = require('../../db/models');

router.route('/new')
  .post(async (req, res) => {
    if (!req.session.userId) {
      res.redirect('/auth/login');
      return;
    }
    const {
      picture, message, likes,
    } = req.body;
    const newTweet = await Tweet.create({
      picture,
      message,
      user_id: req.session.userId,
      likes,
    });
    newTweet.save();
    res.status(200);
    res.end();
  });

router.route('/:id/edit')
  .put(async (req, res) => {
    if (!req.session.userId) {
      res.redirect('/auth/login');
      return;
    }

    const {
      picture, message, id,
    } = req.body;
    const tweet = await Tweet.findOne({ where: { id } });
    tweet.picture = picture;
    tweet.message = message;
    tweet.save();
    res.status(200);
    res.end();
  });

router.route('/:id')
  .delete(async (req, res) => {
    const { id } = req.params;
    await Tweet.destroy({ where: { id } });
    res.json({
      status: 'ok',
    });
  });

module.exports = router;
