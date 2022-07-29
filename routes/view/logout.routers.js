const router = require('express').Router();
// удаляем сессию и чистим куки

router.route('/logout')
  .get((req, res) => {
    req.session.destroy((error) => {
      if (error) {
        console.log(error.message);
      }
    });
    res.clearCookie('user_sid');
    res.redirect('/home');
  });

module.exports = router;
