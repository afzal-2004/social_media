import { Router } from 'express';
import {
  accessitems,
  Senddata,
  Deletecard,
  Updatecard,
  getUpdatedContact,
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
router.put('/updatedata/:id', Updatecard);
router.get('/getupdateContact/:id', getUpdatedContact);

export default router;
