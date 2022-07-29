const React = require('react');

module.exports = function Tweet({tweet}) {
   return (
       <>
       <img src={tweet.picture} alt='Какой-то твит' />
       <div className='card__wrapper'>
       <div className='title__wrapper'>
       <p className="card__title">{tweet['User.name']} щебечет:</p>
       <div className='like__wrapper'>
       <button type='button' className="like" id={tweet.id}>💛</button>
       <p className={`desc-${tweet.id} card__desc`} id={tweet.id}>{tweet.likes}</p>
       </div>
       </div>
       <p className="card__desc">{tweet.message}</p>
       <p className="card__date">{tweet.createdAt.toLocaleString("ru-RU")}</p>
       </div>
       </>
   )
}