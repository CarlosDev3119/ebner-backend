
import { Router } from "express";
import { validateFields } from "../middlewares/validateFields";
import { calificacionByGroup } from "../controllers/calificacionesController";

const router: Router = Router();

//create User POST request 
router.get('/', calificacionByGroup);



export {
    router
} 

