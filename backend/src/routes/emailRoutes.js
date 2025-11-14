import { Router } from "express";
import { enviarMailAutomatizado } from "../controllers/emailController.js"; // ✅ asegurate que el nombre y la ruta sean correctos

const router = Router();

router.post("/newEmail", enviarMailAutomatizado);

export default router;
