import jwt from 'jsonwebtoken'

export const generateJWT = ( uid = '' ) => {

  return new Promise((resolve, reject) => {

    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRET_PRIVATE_KEY,
      { expiresIn: '1h' },
      ( err, token ) => {
        if (err) {
          console.log( err );
          reject('Error al generar el Token')
        } else {
          resolve( token )
        }
      }
    )

  })

} 

