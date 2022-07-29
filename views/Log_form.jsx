const React = require('react');
const Layout = require('./Layout');

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

module.exports = function Login() {
  return (
    <Layout>
      <div className="container">
        <h1 className="login__title">Привет, с возвращением!</h1>
        <div className="login__content">
          <form className="login__form form" method="POST" action="/auth/login" name="loginForm">
            <label htmlFor="login__email"> Введи свой email:</label>
            <input type="email" id="login__email" name="email" />
            <label htmlFor="login__pass"> Введи пароль:</label>
            <input type="password" id="login__pass" name="password" />
            <button type="submit" className="createCard">Войти</button>
          </form>
          <div className="login__error error" />
        </div>
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
};
