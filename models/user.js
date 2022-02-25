const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'El contraseña es obligatoria']
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    required: false,
    default: 'USER_ROLE',
    emun: ['ADMIN_ROLE', 'USER_ROLE']
  },
  status: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }

});

UserSchema.methods.toJSON = function() {
  const { __v, password, _id, ...user } = this.toObject(); 
  user.uid = _id;
  return user;
}

module.exports = model('User', UserSchema);