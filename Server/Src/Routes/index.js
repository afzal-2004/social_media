import { Router } from "express";
import { accessitems, Senddata } from "../Controller/upload.Controller.js";
import { upload } from "../Middleware/Mullter.js";
const router = Router();
router.post("/accessdata", accessitems);
router.post(
  "/senddata",

  upload.single("File"),

  Senddata
);

export default router;
