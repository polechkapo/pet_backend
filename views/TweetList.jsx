const React = require('react');
const Tweet = require('./Tweet');
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

module.exports = function CardList({ user, tweets }) {
  return (
    <ul className="cards__lists">
      {tweets.map((tweet) => (
      <li className={`card__item card__item-${tweet.id}`} id={tweet.id} key={tweet.id}>
        <Tweet tweet={tweet} user={user} />
      </li>
      ))}
    </ul>
  );
};
