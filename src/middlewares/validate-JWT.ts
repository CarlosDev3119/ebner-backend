import { Request, Response, NextFunction} from 'express';

import { verifyJWT } from '../helpers/generateJWT';

export interface AuthWithRequest extends Request {
    Auth : Auth;
}

export interface Auth{
    id : number;
    user_name : string;
}

export const validateJWT = (verifyExpired:boolean = true) => {
    return async(req: Request, res: Response, next: NextFunction) => {

        //read token from authorization header
        const token = req.header('authorization');
        if(!token){
            return res.status(401).json({
                message: 'Auth token is required'
            });
        }
        
        // console.log(token);
        //remove Bearer from token
    
        try {
            const validToken = await verifyJWT(token);
            const errorToken : {name: string, message: string, expiredAt: Date} = validToken.error as {name: string, message: string, expiredAt: Date};

            if(verifyExpired &&  errorToken && errorToken.name === 'TokenExpiredError'){
                return res.status(401).json({
                    message: 'Invalid token',
                    error: errorToken.message
                });
            }else if(errorToken && errorToken.name != 'TokenExpiredError'){
                return res.status(401).json({
                    message: 'Invalid token',
                    error: errorToken.message
                });
            }

            (req as AuthWithRequest).Auth = validToken.data as Auth;

            return next();
        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }
    };
};

