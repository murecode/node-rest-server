import { response, request } from 'express';
import crypt from 'bcryptjs';

// import User from '../model/user.js';


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

    msg: 'GET - controller'

    // total_usuarios,
    // usuarios,
  });

};

export const postUser = async (req, res = response) => {

  // Cuerpo de la respuesta, traemos lo que necesitamos del objeto por desestructuración
  // const { name, email, pass, rol } = req.body;

  // Instancia del Modelo indicando sus propiedades 
  // const usuario = new User({name, email, pass, rol});

  //--Para realizar una encriptacion debemos seguir los siguientes pasos
  //--1) Validar si existe usuario en la base de datos
  

  //--2) Encriptar la contraseña
  // const salt = crypt.genSaltSync();
  // usuario.pass = crypt.hashSync(pass, salt);

  //--3) Grabar en la DB
  // await usuario.save();

  res.json({
    msg: "POST - controller",
    // usuario
  });

};

export const putUser = async (req, res = response) => {
  // const { id } = req.params;
  // const { pass, google, email, ...rest } = req.body

  // if (pass) {
  //   const salt = crypt.genSaltSync();
  //   rest.pass = crypt.hashSync(pass, salt);
  // };

  // const user = await Usuario.findByIdAndUpdate(id, rest)
  // res.json(user);

  res.json({
    msg: "PUT - controller",
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