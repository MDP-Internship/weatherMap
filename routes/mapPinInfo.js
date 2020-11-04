import { Router } from "express";
import MapController from "../controllers/mapPin/mapPin";

const router = Router();
router.get("/", MapController.info);

export default router;

