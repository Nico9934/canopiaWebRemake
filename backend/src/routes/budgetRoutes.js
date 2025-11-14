import { Router } from "express";
import {
  getServicesItems,
  guardarNuevoPresupuesto,
} from "../controllers/budgetController.js";

const router = Router();

router.post("/newBudget", guardarNuevoPresupuesto);
router.get("/newBudget", getServicesItems);


export default router;
