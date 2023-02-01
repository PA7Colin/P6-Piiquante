const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//SECURITE
const dotenv = require('dotenv');
dotenv.config();
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

// ROUTES
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

const app = express();

// CONNEXION A LA BASE DE DONNES MONGOOSE
mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
        
app.use(express.json());

// AUTORISATION CORS, ET METHODE GET POST PUT ETC
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// HELMET POUR SECURISER LES HEADERS et mongoSanitize pour securisezr les injections NoSQL
app.use(helmet({
    crossOriginResourcePolicy: true,
}));
app.use(mongoSanitize());

// USE ROUTES
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;

        


