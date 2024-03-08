const express = require('express');
const router = express.Router();
const passport = require('passport');
const { returnTo } = require('../middleware');
const user = require('../controller/users')

router.get('/register', user.renderRegister);

router.post('/register', user.userRegister)

router.get('/login', user.renderLogin);

router.post('/login', returnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), user.login)

router.get('/logout', user.logout);
module.exports = router;
