const router = require('express').Router();
const storeControler = require('../controllers/storeController');

// const val = require('../middlewares/validations');

router.get('/', storeControler.getAll);

router.get('/:id', storeControler.findById);

module.exports = router;
