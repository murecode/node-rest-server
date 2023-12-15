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
  password: {
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

// Oculta campos del cuerpo de la respuesta JSON
UserSchema.methods.toJSON = function() {
  const { __v, password, rol, ...user } = this.toObject();
  return user
}

export const User = model('User', UserSchema);