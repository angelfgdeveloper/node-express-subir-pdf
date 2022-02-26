const { Router } = require('express');
const { check } = require('express-validator');

const { 
  personalPost, 
  academicPost, 
  posgraduatePost,
  workPost } = require('../controllers/user');

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

router.post('/academic', [
  validJWT,
  check('levelAcademic', 'El nivel academico es obligatorio').not().isEmpty(),
  check('institute', 'El nombre de escuela es obligatorio').not().isEmpty(),
  check('academicAdvance', 'El avance academico es obligatorio').not().isEmpty(),
  check('startMonth', 'El periodo de inicio es obligatorio es obligatorio - mes').not().isEmpty(),
  check('startYear', 'El periodo de inicio es obligatorio es obligatorio - annio').isLength({ max: 4, min: 4 }),
  check('endMonth', 'El periodo de finalizacion es obligatorio es obligatorio - mes').not().isEmpty(),
  check('endYear', 'El periodo de finalizacion es obligatorio es obligatorio - annio').isLength({ max: 4, min: 4 }),
  check('certificate', 'El certificado es obligatorio').isBoolean(),
  check('titleAchieved', 'El titulo es obligatorio').isBoolean(),
  check('identificationCard', 'La cedula es obligatoria').isBoolean(),
  validfields
], academicPost);

router.post('/posgraduate', [
  validJWT,
  check('state', 'El estado del posgrado es obligatorio - NO(0), YES(1), IN_PROCESS(2)').isIn([ 0, 1, 2 ]),
  check('total', 'El total de posgrados es obligatorio').isLength({min: 1, max: 4}),
  check('posgraduates.*.type', 'El tipo de posgrado es requerido').not().isEmpty(),
  check('posgraduates.*.title', 'El titulo de posgrado es requerido').not().isEmpty(),
  check('posgraduates.*.startMonth', 'El periodo de inicio es obligatorio es obligatorio - mes').not().isEmpty(),
  check('posgraduates.*.startYear', 'El periodo de inicio es obligatorio es obligatorio - annio').isLength({ max: 4, min: 4 }),
  check('posgraduates.*.endMonth', 'El periodo de finalizacion es obligatorio es obligatorio - mes').not().isEmpty(),
  check('posgraduates.*.endYear', 'El periodo de finalizacion es obligatorio es obligatorio - annio').isLength({ max: 4, min: 4 }),
  validfields
], posgraduatePost);

router.post('/work', [
  validJWT,
  check('state', 'El estado del posgrado es obligatorio - NO(0), YES(1)').isIn([ 0, 1]),
  check('works.*.company', 'El nombre de la empresa es requerido').not().isEmpty(),
  check('works.*.job', 'El trabajo que realizo es requerido').not().isEmpty(),
  check('works.*.area', 'El área donde estuvo es requerida').not().isEmpty(),
  check('works.*.startMonth', 'El periodo de inicio es obligatorio es obligatorio - mes').not().isEmpty(),
  check('works.*.startYear', 'El periodo de inicio es obligatorio es obligatorio - annio').isLength({ max: 4, min: 4 }),
  check('works.*.endMonth', 'El periodo de finalizacion es obligatorio es obligatorio - mes').not().isEmpty(),
  check('works.*.endYear', 'El periodo de finalizacion es obligatorio es obligatorio - annio').isLength({ max: 4, min: 4 }),
  check('works.*.description', 'La descripción o actividades son requeridas').not().isEmpty(),
  validfields
], workPost);


module.exports = router;