const { Router } = require('express');

const {  validarArchivoSubir } = require('../middlewares');
const { cargarArchivo } = require('../controllers/uploads');

const router = Router();

router.post('/', validarArchivoSubir, cargarArchivo);

module.exports = router;