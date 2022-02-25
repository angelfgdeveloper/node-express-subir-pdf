const { Router } = require('express');
const { check } = require('express-validator');

const { personalPost } = require('../controllers/user');
const { validfields, validJWT } = require('../middlewares');

const router = Router();

router.post('/personal', [
  validJWT,
  check('motherLastName', 'El apellido materno es obligatorio').not().isEmpty(),
  check('lastName', 'El apellido paterno es obligatorio').not().isEmpty(),
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('dateOfBirth', 'La fecha de nacimiento es obligatoria').isDate(),
  check('gender', 'El genero es obligatorio').not().isEmpty(),
  check('state', 'El estado es obligatorio').not().isEmpty(),
  check('town', 'El municipio es obligatorio').not().isEmpty(),
  check('suburb', 'La colonia o fracc. es obligatorio').not().isEmpty(),
  check('street', 'La calle es obligatoria').not().isEmpty(),
  check('numberHome', 'El número interior/exterior es obligatorio').not().isEmpty(),
  check('postalCode', 'El codigo postal es obligatorio').not().isEmpty(),
  check('cellphone', 'El numero celular es obligatorio').not().isEmpty(),
  validfields
], personalPost);


module.exports = router;