import { Router } from "express";
import mapPin from "../controllers/mapPin/mapPin";

const router = Router();
router.get("/", mapPin);

export default router;

