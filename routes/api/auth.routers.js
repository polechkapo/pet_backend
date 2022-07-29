const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.route('/register')
  .post(async (req, res) => {
    const {
      name, password, email,
    } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && password.length < 8) {
      return res.json({ registration: false }); // ошибка регистрации если email уже есть
    }

    const newUser = await User.create({
      name,
      password: await bcrypt.hash(password, 10),
      email,
    });

    req.session.userId = newUser.id;

    res.json({ registration: true });
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;

    const userCheck = await User.findOne({
      where: {
        email,
      },
      raw: true,
    });

    if (!userCheck) {
      return res.json({ login: false });
    }

    const passwordCompare = await bcrypt.compare(password, userCheck.password);
    console.log(passwordCompare);
    if (userCheck.email === email && passwordCompare) {
      console.log('Все в порядке');
      req.session.userId = userCheck.id;
      return res.json({ login: true });
    }
    return res.json({ login: false });
  });

module.exports = router;
