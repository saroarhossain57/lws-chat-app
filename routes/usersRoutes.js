const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

// login page
router.get('/', decorateHtmlResponse('Users'), usersControllers.getUsersPage);

module.exports = router;