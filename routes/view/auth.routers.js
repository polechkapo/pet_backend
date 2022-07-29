const router = require('express').Router();
const Reg = require('../../views/Reg_form.jsx');
const Login = require('../../views/Log_form.jsx');

router.route('/req')
  .get(async (req, res) => {
    res.renderComponent(Reg, {});
  });

router.route('/login')
  .get(async (req, res) => {
    res.renderComponent(Login, {});
  });

module.exports = router;
