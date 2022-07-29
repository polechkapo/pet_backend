const React = require('react');
const Layout = require('./Layout');
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

module.exports = function EditCard({ tweet, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <h1 className="edit__title">Давай изменим наш щебет!</h1>
        <form className="editForm form" name="editForm" id={`${tweet.id}`}>
          <label htmlFor="inputPhoto">Фото:</label>
          <input type="text" name="inputPhoto" defaultValue={`${tweet.picture}`} />
          <label htmlFor="inputInfo">Описание:</label>
          <input type="text" name="inputInfo" defaultValue={`${tweet.message}`} />
          <button type="submit" className="createCard">Изменить</button>
        </form>
      </div>
      <script src="/js/edit.js" />
    </Layout>
  );
};
