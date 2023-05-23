import jwt from 'jsonwebtoken';
import { Auth } from '../middlewares/validate-JWT';
import User from '../models/db/users';



export const createJWT = async(user:User) =>{

    try {
        const payload: Auth = {
            id: user.id_user,
            user_name: user.name_user
        }
        const token = jwt.sign(payload, process.env.SECRETORPRIVATEKEY || 'secret', { expiresIn: '2h'});
        return {
            message: 'Token created successfully',
            data: token
        };
    } catch (error) {
        return {
            message: 'Something went wrong',
            error
        }
    }
}

export const verifyJWT = async(token:string) => {
    try {
        let decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY || 'secret');
        
        return {
            message: 'Token verified successfully',
            data: decoded
        };
    } catch (error) {
        return {
            message: 'Invalid token',
            error
        }
    }
};