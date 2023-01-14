const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/loginControllers');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

// login page
router.get('/', decorateHtmlResponse('Login'), loginControllers.getLoginPage);

module.exports = router;