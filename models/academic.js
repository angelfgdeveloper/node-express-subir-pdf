const { Schema, model } = require('mongoose');

const AcademicSchema = Schema({
  levelAcademic: {
    type: String,
    required: [true, 'El nivel academico es obligatorio'],
  },
  institute: {
    type: String,
    require: [true, 'El nombre del instituto o escuela es obligatorio'],
  },
  academicAdvance: {
    type: String,
    require: [true, 'El avance academico es obligatorio'],
  },
  startMonth: {
    type: String,
    require: [true, 'El periodo de inicio es obligatorio - mes'],
  },
  startYear: {
    type: Number,
    default: 0,
    require: [true, 'El periodo de inicio es obligatorio - annio'],
  },
  endMonth: {
    type: String,
    require: [true, 'El periodo de finalizacion es obligatorio - mes'],
  },
  endYear: {
    type: Number,
    default: 0,
    require: [true, 'El periodo de finalizacion es obligatorio - annio'],
  },
  certificate: {
    type: Boolean,
    default: false,
    require: [true, 'Saber el certificado es obligatorio'],
  },
  titleAchieved: {
    type: Boolean,
    default: false,
    require: [true, 'Saber el titulo logrado es obligatorio'],
  },
  identificationCard: {
    type: Boolean,
    default: false,
    require: [true, 'Saber la cedula profesional es obligatorio'],
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

AcademicSchema.methods.toJSON = function () {
  const { __v, status, ...data } = this.toObject();
  return data;
};

module.exports = model('Academic', AcademicSchema);
