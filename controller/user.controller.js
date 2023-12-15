import { response, request } from 'express';
import bcryptjs from "bcryptjs";
import { User } from '../model/user.js';
// import body from 'express-validator';

const UserModel = User;

export const getUser = async (req = request, res = response) => {

  // const { limit = 5, from = 0 } = req.query;
  // const query_condition = {estado: true}

  // const [ total_usuarios, usuarios ] = await Promise.all(
  //   [ 
  //     User.countDocuments(query_condition),
  //     User.find(query_condition)
  //     .skip(Number(from))
  //     .limit(Number(limit))
  //   ]
  // );

  res.json({
    // total_usuarios,
    // usuarios,
  });

};

export const postUser = async (req, res = response) => {

  // Cuerpo de la respuesta, traemos lo que necesitamos del objeto por desestructuración
  const { firstname, email, password, rol } = req.body;
  // Instancia del Modelo indicando sus props a usar 
  const usuario = new UserModel({ firstname, email, password, rol });
  
  //--Para realizar una encriptacion debemos seguir los siguientes pasos
  //--1) Validar si existe usuario en la base de datos
  
  //--2) Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();  //Nivel de encriptacion de password por defecto 10
  usuario.password = bcryptjs.hashSync( password, salt );
  
  //--3) Grabar en la DB
  await usuario.save();

  res.json({
    usuario
  });

};

export const putUser = async (req, res = response) => {

  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  if ( password ) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync( password, salt );
  };

  const usuario = await UserModel.findByIdAndUpdate( id, resto );
  res.json( usuario );

  res.json({
    id
  });

};

export const patchUser = (req, res = response) => {

  // const { id } = req.params;

  res.json({
    msg: "PATCH - Controller",
    // id
  })

};

export const deleteUser = async (req, res = response) => {

  // const { id } = req.params;
  
  //Esta linea Elimina fisicamente de la DB - No es recomendable
  // const user = await Usuario.findByIdAndDelete(id);

  //Esta linea "oculta" al usuario de la DB por lo que no puede ser accedido pero aun existe
  // const user = await User.findByIdAndUpdate(id, {estado: false});

  res.json({
    msg: "DELETE - Controller"
  })
};