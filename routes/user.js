// CONFIG DU ROUTER AVEC EXPRESS
const express = require('express');
const router = express.Router();

// RECUP DES CONTROLLERS USER 
const userCtrl = require('../controllers/user');

//ROUTES
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// EXPORTER LES ROUTER
module.exports = router;