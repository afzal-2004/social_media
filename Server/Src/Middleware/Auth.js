import jwt from 'jsonwebtoken';
import { user } from '../Models/user.model.js';
import dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});
export const Auth = async (req, res, next) => {
  const token = req.headers.authorization;
  const Token = token?.split(' ')[1];
  console.log(' Token Send from Frountend Side is :', Token);
};
