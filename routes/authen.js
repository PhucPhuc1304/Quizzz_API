// authRouter.js
const express = require('express');
const router = express.Router();
const UserValidate = require('../validates/user');
const authController = require('../controllers/authController');

router.post('/register', UserValidate.validator(), authController.register);
router.post('/login', authController.login);
router.get('/me', authController.me);

module.exports = router;
