import { response, request } from 'express';
import bcryptjs from "bcryptjs";
import { User } from '../model/user.js';
// import body from 'express-validator';

const UserModel = User;

export const getUser = async (req = request, res = response) => {

  const { limit = 5, from = 0 } = req.query; //Paginación
  const query_condition = { estado: true };  //*

  const [ usuarios, total ] = await Promise.all(  //**
    [ 
      UserModel.find( query_condition ) // search records
      .skip( Number(from) ) // skip records from
      .limit( Number(limit) ), // search records until
      UserModel.countDocuments( query_condition ) //records counting
    ]
  );

  res.json({
    usuarios, total
  });

  //* Se establece una condicion para hacer visible los registros que la cumplen
  //** Desestructuracion de arreglo para establecer un cuerpo para la representacion del recurso
};

export const postUser = async (req, res = response) => {

  const { firstname, email, password, rol } = req.body; //*
  const usuario = new UserModel({ firstname, email, password, rol }); //Instancia del schema
  
  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();  //**
  usuario.password = bcryptjs.hashSync( password, salt ); //***
  
  //Grabar en la DB
  await usuario.save();

  res.json({
    usuario
  });

  //* desestructuración del cuerpo de la respuesta, traemos solo los campos necesarios del objeto 
  //** Nivel de encriptacion de password por defecto 10
  //*** Se hashea la contraseña junto con un salt para aumentar la seguridad
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

  const { id } = req.params;

  // const usuario = await UsuarioModel.findByIdAndDelete( id ); //*

  const usuario = await UserModel.findByIdAndUpdate( id, {estado: false} ); //**

  res.json({
    usuario
  })

  //* Elimina fisicamente de la DB - No recomendo por la integridad referencial.
  //** Oculta el registro de la DB segun una condicion...
  //...Recomendado ya que no puede ser accedido pero aun existe "Soft Deleted".

};