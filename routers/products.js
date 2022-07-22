const router = require('express').Router();
const storeControler = require('../controllers/storeController');

const { validaProducts } = require('../middlewares/validations');

router.get('/', storeControler.getAll);

router.get('/:id', storeControler.findById);

router.post('/', validaProducts, storeControler.registerNewProduct);

module.exports = router;
