import { Request, Response } from "express";
import { VistaCalificaciones } from "../models/views/vistaCalificaciones";


export const calificacionByGroup = async (req: Request, res: Response) => {
    try{

        const resp = await VistaCalificaciones.findAll();

        return res.status(200).json({msg: 'calificacionByGroup', resp});
        
    }catch(error){
        return res.status(500).json(error)
    }
}
