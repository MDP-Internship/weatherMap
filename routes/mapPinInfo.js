/* eslint-disable no-unused-vars */

import { Router } from "express";
import mapPin from "../controller/mapPin/mapPin";

// import alias using !!!

const router = Router();



router.get("/", async (req, res) => {
    const  lang  = req.query;
    const  lat  = req.query;

    res.send(200, mapPin(lang, lat));
    
});

export default router;

