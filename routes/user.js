const { Router } = require('express');
const { check } = require('express-validator');

const { personalPost } = require('../controllers/user');
const { validfields, validJWT } = require('../middlewares');

const router = Router();

router.post('/personal', [
  validJWT,
  check('motherLastName', 'El motherLastName es obligatorio').not().isEmpty(),
  check('lastName', 'El lastName es obligatorio').not().isEmpty(),
  check('name', 'El name es obligatorio').not().isEmpty(),
  check('dateOfBirth', 'El dateOfBirth es obligatorio').not().isEmpty(),
  check('gender', 'El gender es obligatorio').not().isEmpty(),
  check('state', 'El state es obligatorio').not().isEmpty(),
  check('town', 'El town es obligatorio').not().isEmpty(),
  check('suburb', 'El suburb es obligatorio').not().isEmpty(),
  check('street', 'El street es obligatorio').not().isEmpty(),
  check('numberHome', 'El numberHome es obligatorio').not().isEmpty(),
  check('postalCode', 'El postalCode es obligatorio').not().isEmpty(),
  check('cellphone', 'El cellphone es obligatorio').not().isEmpty(),
  validfields
], personalPost);


module.exports = router;