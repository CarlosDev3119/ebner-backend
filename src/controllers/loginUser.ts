import { Request, Response } from "express";
import { handleServerError } from "../utils/response";
import { dbAccessSignIn } from "../helpers/dataBase/login";

import { createJWT } from "../helpers/generateJWT";
import { AuthWithRequest } from "../middlewares/validate-JWT";
import { dbAccessGetUserById } from "../helpers/dataBase/users";

export const loginUser = async (req: Request, res: Response) => {

    const { email, pass } = req.body;
    try{

        const user = await dbAccessSignIn({email, pass});
        const token = await createJWT(user.data);
        user.data.token = token;
        
        return res.status(200).json(user);

    }catch(error){
        return handleServerError(res, error);

    }
}

export const validate = async(req: Request, res: Response) => {

    const {Auth} = req as AuthWithRequest;
    const  { id: user_id } = Auth;

    try {
        const user = await dbAccessGetUserById(user_id.toString());
        if(user.error) return handleServerError(res, user.error);
        if(!user.data) return res.status(404).json({message: user.message, data: user.data});

        const token = await createJWT(user.data);

        if(token.error) {
            return res.status(500).json({
                message: token.message,
                error: token.error
            });
        }

        return res.status(200).json({
            message: 'Se ha validado el usuario correctamente',
            data: {
                user_id: user.data.id_user,
                name: user.data.name_user,
                email: user.data.email,
                staff_id: user.data.staff_id,
                status_user: user.data.status_user,
                user_type: user.data.user_type,
                token
            }
        });
    } catch (error) {
        return handleServerError(res, error);
    }
};
