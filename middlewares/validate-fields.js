import { validationResult } from 'express-validator';

const validateFields = (req, res, next) => {

  const possibleErrors = validationResult(req)
  if ( !possibleErrors.isEmpty() ) {
    return res.status(400).json(possibleErrors)
  }

  //sino existe errores en ninguno de los campos continua
  next();

};

export default validateFields;