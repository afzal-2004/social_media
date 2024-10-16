import { user } from '../Models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});
//  This  Controller For User Create His Account
const SignUpUser = async (req, res) => {
  const {
    first,
    last,
    email,
    address,
    DOB,
    MobileNumber,
    Password,
    ConfirmPassword,
  } = req.body;

  try {
    let userExexited = await user.findOne({ email });
    const hasedPassword = await bcrypt.hash(Password, 10);
    if (Password !== ConfirmPassword) {
      return res.status(401).json({
        message: 'Confirm Password  are Must be same ',
      });
    }
    if (!userExexited) {
      const User = new user({
        firstname: first,
        lstname: last,
        email: email,
        address: address,
        DOB: DOB,
        MobileNumber: MobileNumber,

        password: hasedPassword,
      });
      const token = jwt.sign(
        { email: User.email, id: User._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
      );

      const result = await User.save();
      return res.status(201).json({
        message: result,
        token: token,
      });
    } else {
      return res.status(400).json({
        message: 'User is Already Execited',
      });
    }
  } catch (error) {
    return res.status(400).json({
      details: error.details,
      message: 'SomeThing Went wrong ',
    });
  }
};
//  This Controller For   User Login
const SignInUser = async (req, res) => {
  const { email, Password, MobileNumber } = req.body;

  // const Userexecited = await user.findOne({ MobileNumber });

  const Userexecited = await user.findOne({
    $or: [{ email }, { MobileNumber }],
  });

  try {
    if (!Userexecited) {
      return res.status(404).json({
        message: 'User does Not exesited',
      });
    } else {
      const isPasswordvalid = bcrypt.compare(Password, Userexecited.password);

      if (!isPasswordvalid) {
        return res.status(402).json({
          message: 'Incorrect password !!',
        });
      } else {
        const token = jwt.sign(
          { email: Userexecited.email, id: Userexecited._id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '1d' }
        );
        return res.status(201).json({
          message: Userexecited,
          token,
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      message: 'SomeThing Went wrong ',
      details: error.message,
    });
  }
};
//  This Controller For user Get His Profile Details
const getSignUpUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const Finduser = await user.findById({
      _id: decode.id,
    });
    if (!Finduser) {
      return res.status(400).json({
        message: ' Login',
      });
    } else {
      return res.status(201).json({
        Finduser,
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: 'SomeThing Went Wrong',
    });
  }
};
export { SignUpUser, SignInUser, getSignUpUser };
