import { Router } from "express";
import { accessitems, Senddata } from "../Controller/upload.Controller.js";
const router = Router();
router.post("/accessdata", accessitems);
router.post("/senddata", Senddata);

export default router;
