/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

const React = require('react');
const Layout = require('./Layout');
const TweetList = require('./TweetList');

module.exports = function Home({ user, tweets }) {
  return (
    <Layout user={user}>
      <div className="container container__home">
        {user ? <><div className="container container__home">
          <h1 className="new__title">Давай создадим новый щебет!</h1>
          <form className="newForm form" name="newForm">
            <label htmlFor="inputPhoto">Фото:</label>
            <input type="text" name="inputPhoto" />
            <label htmlFor="inputInfo">Описание:</label>
            <input type="text" name="inputInfo" />
            <button type="submit" className="createCard">Прощебетать!</button>
          </form>
        </div></>: <p>Чтобы создать свой щербет, тебе нужно зарегистрироваться.</p>}
        <TweetList user={user} tweets={tweets} />
      </div>
      <script src="/js/new.js" />
      <script src="/js/likes.js" />
    </Layout>
  );
};
