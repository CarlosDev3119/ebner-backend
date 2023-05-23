import { LoginAttributes } from "../../interfaces/interfaces";
import User from "../../models/db/users";

export const dbAccessSignIn = async ({ email, pass}: LoginAttributes) => {
    try{

        const user = await User.findOne({where: {email, pass}})
        if(!user) return { message: "User not found", data: null}

        const {pass: password, ...restUser} = user.dataValues;

        return {
            message:'User Authenticated successfully',
            data:  restUser
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}