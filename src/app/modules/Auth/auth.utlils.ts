
import  jwt  from 'jsonwebtoken';



export const accesstoken = (
    JwtPayload: { email: string; role: string},
    secret: string,
    expiresIn: string
) => {
    return jwt.sign(JwtPayload, secret, {
        expiresIn: expiresIn
    });
};