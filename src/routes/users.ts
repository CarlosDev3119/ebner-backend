import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/userControllers";
import { validateFields } from "../middlewares/validateFields";
import { UserSchema } from "../models/schema/schemaUsers";

const router: Router = Router();

//create User POST request 
router.post('/', [validateFields(UserSchema)], createUser);

router.get('/', getAllUsers);


export {
    router
} 

