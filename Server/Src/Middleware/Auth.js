import jwt from 'jsonwebtoken';
import { user } from '../Models/user.model.js';
import dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});
export const Auth = async (req, res, next) => {
  const token = req.headers.authorization;
  const Token = token.split(' ')[1];
  if (!token || !token.startsWith('Bearer')) {
    return res
      .status(401)
      .json({ message: 'Authorization header missing or invalid' });
  }

  try {
    const decoded = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

/**
 *  WORKING OF JWT
 *  FIRST  STEP ON THE REGISTRATION TIME OR  USER LOGIN TIME  JWT TOKEN IS CRETAED  IN SERVER SIDE AND SEND TO THE  CLIENT SIDE WITH THE HELP OF LOCAL STORAGE OR COKKIE THIS IS STORED IN  USER LOCAL BROWSER ..
 *  SECOND   WE SEND THIS TOKEN IN BACKEND  TO VERIFY IOR AUTHECATED T PERSONALITY OF THE USER  FOR THIS WE CREATED PROTECTED ROUTE  WHERE WE WANT TO ACCESS THIS USER DATA  IN FROUNTED SIDE 
 *  WGEN WE SEND USING BEARER TOKEN THIS DATA IN BACKEND THIS  TOKEN  FIRST AUTHECATED IN BACKEND FOR  BACKEND AUTHECATEION  I AM CREATING AN AUTH MIDDLEWARE  WHO WORKS LIKE  A DOORMAN FOR WHREE WE WANT TO USE THIS 
 * LIKE  AANE YA KOI BHI CHIJ LANE SEPHELE MUJHSE MIL K HI JANA M NHI TO TUM KUCH BHI KHEER BANOGE KUCH BHI ACCESS KAROGE

 */
