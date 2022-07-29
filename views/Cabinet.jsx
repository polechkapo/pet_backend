/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

const React = require('react');
const Layout = require('./Layout');
const Tweet = require('./Tweet');

module.exports = function Cabinet({ user, tweets }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="cabinet__content">
          <h1 className="cabiner__title">
            Привет!
          </h1>
          <p>Это твой личный кабинет.   Здесь ты можешь отредактировать свои щебеты и создавать новые.</p>
          <div className="container container__home">
          <p className="new__title">Давай создадим новый щебет!</p>
          <form className="newForm form" name="newForm">
            <label htmlFor="inputPhoto">Фото:</label>
            <input type="text" name="inputPhoto" />
            <label htmlFor="inputInfo">Описание:</label>
            <input type="text" name="inputInfo" />
            <button type="submit" className="createCard">Прощебетать!</button>
          </form>
          <ul className='cards__lists cabinet__list'>
          {tweets.map((tweet) => (
            <li className={`card__item card__item-${tweet.id} card__item-cabinet`} id={tweet.id} key={tweet.id}>
            <img src={tweet.picture} alt='Какой-то твит' />
            <p className="card__desc">{tweet.message}</p>
          <div className="links__wrapper">
            <a href={`/tweet/${tweet.id}/edit`} id={tweet.id} className="createCard">Изменить</a>
            <a href={`/tweet/${tweet.id}/delete`} id={tweet.id} className="deleteButton createCard">Удалить</a>
          </div>
          </li>
          ))}
          </ul>
      </div>
      </div>
      </div>
      <script src="/js/delete.js" />
      <script src="/js/new.js" />
    </Layout>
  );
};
