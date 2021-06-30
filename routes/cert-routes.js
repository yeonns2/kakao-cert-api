const express = require('express');
const {
       getkakaocert,
       getverifyauthstate,
      } = require('../controllers/certController');

const router = express.Router();

router.get('/user/:id',  getkakaocert);
router.post('/user/verify/:id',  getverifyauthstate);

module.exports = {
    routes: router
}
