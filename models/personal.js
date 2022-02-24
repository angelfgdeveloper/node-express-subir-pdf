const { Schema, model } = require('mongoose');

const PersonalSchema = Schema({
  lastName: {
    type: String,
    required: [true, 'El apellido paterno es obligatorio'],
  },
  name: {
    type: String,
    require: [true, 'El nombre es obligatorio'],
  },
  dateOfBirth: {
    type: String,
    require: [true, 'La edad es obligatoria'],
  },
  gender: {
    type: String,
    require: [true, 'El genero es obligatorio'],
  },
  state: {
    type: String,
    require: [true, 'El estado es obligatorio'],
  },
  town: {
    type: String,
    require: [true, 'El municipio es obligatorio'],
  },
  suburb: {
    type: String,
    require: [true, 'La colonia o fraccionamieto es obligatorio'],
  },
  street: {
    type: String,
    require: [true, 'La calle es obligatorio'],
  },
  numberHome: {
    type: Number,
    default: 0,
    require: [true, 'El numero interior o exterior es obligatorio - casa'],
  },
  postalCode: {
    type: Number,
    default: 0,
    require: [true, 'El codigo postal es obligatorio'],
  },
  telephone: {
    type: String,
    // require: [false, 'El telefono de casa NO es obligatorio']
  },
  cellphone: {
    type: String,
    require: [true, 'El numero de celular es obligatorio'],
  },
  curp: {
    type: String,
    // require: [false, 'La CURP no es obligatoria']
  },
  rfc: {
    type: String,
    // require: [false, 'El RFC no es obligatorio']
  },
  nss: {
    type: String,
    // require: [false, 'La numero de seguro social no es obligatorio - NSS']
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

PersonalSchema.methods.toJSON = function () {
  const { __v, status, ...data } = this.toObject();
  return data;
};

module.exports = model('Personal', PersonalSchema);
