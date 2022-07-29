const React = require('react');
const Layout = require('./Layout');

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

module.exports = function Registration() {
  return (
    <Layout>
      <div className="container">
        <h1 className="reg__title">Привет, давай зарегистрируемся!</h1>
        <div className="reg__content">
          <form className="reg__form form" method="POST" action="/auth/register" name="regForm">
            <label htmlFor="reg_name"> Введи свое имя:</label>
            <input type="text" id="reg__name" name="name" />
            <label htmlFor="reg__email"> Введи свой email:</label>
            <input
              type="email"
              id="reg__email"
              name="email"
              required
              pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
              title="Введите действующую почту"
            />
            <label htmlFor="reg__pass"> Введи пароль:</label>
            <input
              type="password"
              id="reg__pass"
              name="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
            />
            <label htmlFor="reg__pass"> Введи пароль еще раз:</label>
            <input type="password" id="reg__pass-check" name="passwordCheck" />
            <button type="submit" className="createCard">Зарегистрироваться!</button>
          </form>
          <div className="reg__error error" />
        </div>
      </div>
      <script src="/js/regist.js" />
    </Layout>
  );
};
