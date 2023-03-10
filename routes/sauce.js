const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// APPEL DES CONTROLLERS AVEC TOUT LE STUFF 
const sauceCtrl = require('../controllers/sauce');

//ROUTES 
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/', auth, multer, sauceCtrl.createSauce );
router.get('/:id', auth, sauceCtrl.getOneSauce); 
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeOrDislike);

module.exports = router;