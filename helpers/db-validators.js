import { Role }  from "../model/role.js";
import { User } from "../model/user.js"; 


export const validarRol = async (rol = '', ) => {

  const existeRol = await Role.findOne({rol});

  if (!existeRol) {
    throw new Error(`El rol no esta definido en la base de datos`);
  };
  
};

export const validarEmail =  async (email) => {

  const existeEmail = await User.findOne({email});
  
  if(existeEmail) {
    throw new Error(`El ${email} ya esta registrado`);
  };

};

export const validarUserId = async (id) => {

  const existeId = await User.findById(id);

  if (!existeId) {
    throw new Error(`El usuario con el Id ${id} no está registrado`);
  };

};

// export const esRolValido = {
//   validarRol
// };

