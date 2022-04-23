const { Router } = require('express');

const { saveData } = require('../controllers/SaveDataController');

const router = Router();

router.get('/app', saveData);

module.exports = router;