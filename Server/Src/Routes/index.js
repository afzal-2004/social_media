import { Router } from "express";
import { accessitems } from "../Controller/upload.Controller.js";
const router = Router();
router.route("/accessdata", accessitems);
export default router;
