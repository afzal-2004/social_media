import { Router } from 'express';
import {
  accessitems,
  Senddata,
  Deletecard,
  Updatecard,
  getUpdatedContact,
  Mypost,
} from '../Controller/upload.Controller.js';
import {
  SignUpUser,
  SignInUser,
  getSignUpUser,
} from '../Controller/userController.js';
import { Auth } from '../Middleware/Auth.js';

import { upload } from '../Middleware/Mullter.js';
const router = Router();
router.get('/accessdata', accessitems);
router.post('/senddata', Auth, upload.single('File'), Senddata);
router.delete('/Deletecard/:id', Auth, Deletecard);
router.put('/updatedata/:id', Auth, Updatecard);
router.get('/getupdateContact/:id', Auth, getUpdatedContact);

router.post('/SignUp', SignUpUser);
router.post('/SignIn', SignInUser);
router.get('/SignUpdata', getSignUpUser);
router.get('/My_posts', Mypost);

export default router;

// file or any type of video uploadin in backend is  persfroms in these steps
// a)first of Fall   through an middleware like multer take file on your local system after taking on local system
// b)push on cloudniary cloud
// c)after this url is basically saved inside in your   db
