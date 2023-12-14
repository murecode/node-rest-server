
import Router from 'express';
// import check from 'express-validator';

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

userRouter.get    ('/', getUser);
userRouter.post   ('/', postUser);
userRouter.put    ('/:id', putUser);
userRouter.patch  ('/:id', patchUser);
userRouter.delete ('/:id', deleteUser);

// userRouter.post('/', [
  // check('name', 'El nombre es requerido').not().isEmpty(),
  // check('pass', 'Contraseña debe tener más de 8 caracteres').isLength({min:8}),
  // check('email').custom(validarEmail),
  // check('rol').custom(validarRol),
  // validarCampos
// ], postUser);

// userRouter.put('/:id', [
//   check('id', "No es un id valido").isMongoId(),
//   check('id').custom(validarUserId),
//   validarCampos
// ], putUser);

// userRouter.patch('/:id', [
  
// ],patchUser)

// userRouter.delete('/:id', [
  // check('id', 'No es un id valido').isMongoId(),
  // check('id').custom(validarUserId),
  // validarCampos
// ], deleteUser);

export default userRouter;



