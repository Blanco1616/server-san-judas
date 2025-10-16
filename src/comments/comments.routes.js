import { Router } from "express";
import { createComment } from "./comment.controller.js";


const router = Router();

//Crear comentario
router.post("/",createComment);

export default router;