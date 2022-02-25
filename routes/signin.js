const { Router } = require('express');
const { check } = require('express-validator');

const { signinPost } = require('../controllers/signin');
const { emailExist } = require('../helpers');
const { validfields } = require('../middlewares');

const router = Router();

router.post('/', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El correo electrónico no es válido').isEmail(),
  check('password', 'La contraseña es obligatoria y mayor a 6 letras').isLength({ min: 6 }),
  check('email').custom(emailExist),
  validfields
], signinPost);


module.exports = router;