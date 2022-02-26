const { Schema, model } = require('mongoose');

const ListPosgraduateSchema = Schema({
  type: {
    type: String,
    required: [true, 'El tipo de posgrado es obligatorio'],
  },
  title: {
    type: String,
    required: [true, 'El titulo es obligatorio'],
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
  status: {
    type: Boolean,
    default: false,
    required: true,
  }
});

const PosgraduateSchema = Schema({
  state: {
    type: Number,
    required: true,
    default: 0,
    emun: [0, 1, 2] // NO(0), YES(1), IN_PROCESS(2)
  },
  total: {
    type: Number,
    default: 0,
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
  posgraduates: {
    type: [ListPosgraduateSchema],
    default: []
  }
});

PosgraduateSchema.methods.toJSON = function () {
  const { __v, status, ...data } = this.toObject();
  return data;
};

module.exports = model('Posgraduate', PosgraduateSchema);
