const express = require('express');
const router = express.Router();
const inboxControllers = require('../controllers/inboxControllers');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

// login page
router.get('/', decorateHtmlResponse('Inbox'), inboxControllers.getInboxPage);

module.exports = router;