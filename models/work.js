const { Schema, model } = require('mongoose');

const ExperiencesScheman = Schema({
  company: {
    type: String,
    required: [true, 'El nombre de la empresa es obligatorio'],
  },
  job: {
    type: String,
    required: [true, 'El trabajo que realizo es obligatorio'],
  },
  area: {
    type: String,
    required: [true, 'El area de trabajo es obligatorio'],
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
  description: {
    type: String,
    required: [true, 'Las actividades que desempennio son obligatorias - descripcion'],
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  }
});

const WorkSchema = Schema({
  state: {
    type: Number,
    required: true,
    default: 0,
    emun: [0, 1] // NO(0), YES(1)
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
  experiences: [ExperiencesScheman]
});

WorkSchema.methods.toJSON = function () {
  const { __v, status, ...data } = this.toObject();
  return data;
};

module.exports = model('Work', WorkSchema);
