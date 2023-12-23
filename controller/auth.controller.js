import { response } from 'express';
import bcryptjs from 'bcryptjs'
import { User } from "../model/user.js";
import { generateJWT } from '../helpers/jwt_generator.js';

const UserModel = User;


export const login = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    //verificar si el email existe
    const user = await UserModel.findOne({ email });
    if ( !user ) {
      return res.status(400).json({ msg: "El email no existe" });
    }
    //Verificar si el estado del usuario esta activo
    if ( !user.estado ) {
      res.status(400).json({ msg: "Usuario/Password - usuario inactivo" })
    }

    //verificar si la contraseña es correcta
    const validPassword = bcryptjs.compareSync( password, user.password );
    if ( !validPassword ) {
      res.status(400).json({ msg: "Usuario/Password - Password incorrecto" })
    }

    //Generar JWT
    const token = await generateJWT( user.id );

    res.json({ user, token })

  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Contacter con soporte' })
  }



  res.json({
    email,
    password
  })
}
