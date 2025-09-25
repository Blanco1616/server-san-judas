import jwt from 'jsonwebtoken'
import { token } from 'morgan';

export const generarJWT = (uid= '', email = '')=> {
    return new Promise((resolver, reject) => {
        const payload = {uid, email};
        jwt.sign(
            payload,
            process.env.TOKEN_KEY,
            {
             expiresIn: '8h',   
            },
            (err,token) => {
                if(err){
                    console.error(err);
                    reject('Error al generar el token:' + err.message);                 
                }else{
                   resolve(token);

                }
            }
        );
    });
};