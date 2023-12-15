import { Role }  from "../model/role.js";
import { User } from "../model/user.js"; 


export const validateRol = async (rol = '') => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol no esta definido en la base de datos`);
  }
}

export const validateEmail =  async (email) => {
  const isEmail = await User.findOne({ email });
  if( isEmail ) {
    throw new Error(`El email >> ${email} << ya esta registrado`);
  }
}

export const validateUserId = async (id) => {
  const isUserId = await User.findById(id);
  if ( !isUserId ) {
    throw new Error(`El usuario Id >> ${id} << no está registrado`);
  }
}


