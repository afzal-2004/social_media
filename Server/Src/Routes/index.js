import { Router } from 'express';
import {
  accessitems,
  Senddata,
  Deletecard,
  Updatecard,
  getUpdatedContact,
} from '../Controller/upload.Controller.js';
import { upload } from '../Middleware/Mullter.js'; //  this is multer middleware for
const router = Router();
router.get('/accessdata', accessitems);
router.post('/senddata', upload.single('File'), Senddata);
router.delete('/Deletecard/:id', Deletecard);
router.put('/updatedata/:id', Updatecard);
router.get('/getupdateContact/:id', getUpdatedContact);

export default router;

// file or any type of video uploadin in backend is  persfroms in these steps
// a)first of Fall   through an middleware like multer take file on your local system after taking on local system
// b)push on cloudniary cloud
// c)after this url is basically saved inside in your   db
