import { Router } from 'express';
import {
  accessitems,
  Senddata,
  Deletecard,
} from '../Controller/upload.Controller.js';
import { upload } from '../Middleware/Mullter.js';
const router = Router();
router.get('/accessdata', accessitems);
router.post(
  '/senddata',

  upload.single('File'),

  Senddata
);
router.delete('/Deletecard/:id', Deletecard);

export default router;
