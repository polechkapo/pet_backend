require('dotenv').config();
require('@babel/register');

const app = require('express')();
const configApp = require('./config/config');

const homeRouter = require('./routes/view/home.routers');
const authRouter = require('./routes/view/auth.routers');
const authApiRouter = require('./routes/api/auth.routers');
const logoutRouter = require('./routes/view/logout.routers');
const tweetApiRouter = require('./routes/api/tweet.routers');
const cabinetRouter = require('./routes/view/cabinet.routers');
const tweetRouter = require('./routes/view/tweet.routers');
const likeApiRouter = require('./routes/api/likes.router');

configApp(app);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/home', homeRouter);
app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);
app.use(logoutRouter);
app.use('/api/tweet', tweetApiRouter);
app.use('/cabinet', cabinetRouter);
app.use('/tweet', tweetRouter);
app.use(likeApiRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Сервер шуршит ${PORT}`);
});
