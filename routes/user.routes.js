
import { Router } from 'express';
import { check } from 'express-validator';
import validateFields from '../middlewares/validate-fields.js';
import { validateEmail, validateRol, validateUserId } from '../helpers/db-validators.js';

import {
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} from '../controller/user.controller.js';

// import { validarCampos } from '../middlewares/validate-fields.js';
// import { validarEmail, validarRol, validarUserId } from '../helpers/db-validators.js';

const userRouter = Router();

userRouter.get('/', getUser);

userRouter.post('/', [
  check('firstname', 'El nombre es requerido').not().isEmpty(),
  check('email').custom( validateEmail ),
  check('password', 'Contraseña debe tener más de 6 caracteres').isLength({min:6}),
  check('rol').custom( validateRol ),
  validateFields
], postUser);

userRouter.put('/:id', [
  check('id', "No es un id valido").isMongoId(),
  check('id', 'El id no existe').custom( validateUserId ),
  check('rol').custom( validateRol ),
  validateFields
], putUser);

userRouter.delete('/:id', [
  check('id', 'No es un id valido').isMongoId(),
  check('id').custom( validateUserId ),
  validateFields
], deleteUser);

userRouter.patch('/:id', [
  
],patchUser)

export default userRouter;



