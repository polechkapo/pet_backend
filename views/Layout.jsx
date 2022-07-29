const React = require('react');

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
module.exports = function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Щебетатель</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header>
          <nav className="navigation">
            <h1 className='navigation__title'>Щебетатель🕊</h1>
            <ul className="navigation__lists">
              { user
                ? (
                  <>
                    <li className="navigation__item">
                      <a className="navigation__link" href="/home">
                        Привет,
                        {' '}
                        {user.name}
                      </a>
                    </li>
                    <li className="navigation__item"><a href={`/cabinet/${user.id}`} className="navigation__link">Личный кабинет</a></li>
                    <li className="navigation__item"><a href="/logout" className="navigation__link">Выйти</a></li>
                  </>
                )
                : (
                  <>
                    <li className="navigation__item"><a href="/auth/req" className="navigation__link">Зарегистрироваться</a></li>
                    <li className="navigation__item"><a href="/auth/login" className="navigation__link">Войти</a></li>

                  </>
                )}
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="navigation footer">
          <ul className="navigation__lists">
            <li className="navigation__item">
              Made in Elbrus with Love 💜💙
            </li>
            <li className="navigation__item">
              Тигры, 2022
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
};
