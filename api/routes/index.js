/* eslint-disable no-unused-vars */
const express = require('express');
const router  = express.Router();
const { validationResult } = require('express-validator');

const authMiddleware = require('../middleware/auth')
const userValidation2 = require('../middleware/validation')

const roleController = require('../controllers/role');

function handleValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
}

// router.post('/user/signup', userValidation2, handleValidationErrors,  userController.signup);
// router.post('/user/signin', userController.signin);
// router.post('/user/send_verify_email', authMiddleware, userController.sendVerifyEmail);
// router.get('/user/verify', userController.verifyEmail);
// router.post('/user/signout', userController.signout);
// router.post('/user/check_token', userController.checkToken);
// router.post('/user/get_user', authMiddleware, userController.getUser);
// router.post('/user/change_photo',  userController.changePhoto);
// router.post('/user/change_bg_photo', userController.changeBackgroundPhoto);
// router.get('/coba_asosiation', userController.cobaAssociation);
// router.post('/user/get_like', userController.changeBackgroundPhoto);

// role controller
// router.get('/recruiter/get_all_role', roleController.getAllRole);

module.exports = router