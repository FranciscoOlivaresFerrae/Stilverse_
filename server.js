// server.js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const principalScreen = require('./routes/principalRoutes');
const starsRoutes = require('./routes/starsRoutes');
const planetsRoutes = require('./routes/planetsRoutes'); // 👈 nueva línea

dotenv.config();

const app = express();

app.use('/stars', starsRoutes);
app.use('/planets', planetsRoutes); // 👈 nueva línea

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', principalScreen);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
