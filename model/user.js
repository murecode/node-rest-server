import { Schema, model } from 'mongoose';

const UserSchema = Schema({

  firstname: {
    type: String,
    required: [ true, 'El nombre es obligatorio' ]
  },
  email: {
    type: String,
    required: [ true, 'El correo es obligatorio' ],
    unique: true
  },
  pass: {
    type: String,
    required: [ true, 'La contraseña es obligatoria' ]
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [ true, 'El rol es requerido' ],
    enum: [ 'ADMIN', 'USER', 'CLIENT' ]
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }

});


UserSchema.methods.toJSON = function() {
  const { __v, pass, rol, ...usuario } = this.toObject();
  return usuario
};

export const User = model('User', UserSchema);