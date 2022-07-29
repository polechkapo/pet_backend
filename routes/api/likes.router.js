const router = require('express').Router();
const { Tweet } = require('../../db/models');

router.route('/like')
  .put(async (req, res) => {
    const {
      id,
    } = req.body;
    const tweet = await Tweet.findOne({ where: { id } });
    tweet.likes += 1;
    tweet.save();
    res.status(200);
    res.json(tweet.likes);
    res.end();
  });

module.exports = router;
