import { Request, Response, Router } from "express";
import { tratamientoObstetroController } from "../controllers/tratamientoObstetro.controller";


const tratamientoObstetro = new tratamientoObstetroController();
const routerTratamientoObstetro = Router();

// todo --> save consults & treatments
routerTratamientoObstetro.get("/tratamientos/:expedienteID", (req: Request, res: Response) => {
    tratamientoObstetro.getTratamientosByExpediente(req, res)
})