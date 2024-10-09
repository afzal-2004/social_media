import jwt from 'jsonwebtoken';

import { post } from '../Models/post.model.js';
import { uploadImage } from '../utils/Cloudniary.js';

//  this Controller For Access All Post  On my Web Page
const accessitems = async (req, res) => {
  try {
    post.find({}).then((data) => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: 'Something Went Wrong',
      details: error.message,
    });
  }
};
//  This Controller For  Create An New Post
const Senddata = async (req, res) => {
  const { Creator, Title, Message, tags } = req.body;
  const File = req.file;
  const Clodniary = await uploadImage(File.path);
  const token = req.headers.authorization.split(' ')[1];
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const newdata = new post({
    Creator,
    Title,
    Message,
    provided_by: decode.id,
    avtar: Clodniary.url || '',
  });

  const Data = await newdata.save();

  res.status(200).json({
    success: true,
    Data,
  });
};
//  This  Controller For delete Post
const Deletecard = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const Userid = decode.id;

  try {
    const id = req.params.id;
    const postToDelete = await post.findById({ _id: id });

    if (postToDelete.provided_by != Userid) {
      return res.status(403).json({
        message: 'You are not  Delete This post ',
      });
    }
    const DeletedContact = await post.findByIdAndDelete({ _id: id });
    if (!DeletedContact) {
      return res.status(401).json({
        message: 'Something Went Wrong',
        details: error.message,
      });
    } else {
      return res.status(201).json({
        message: 'Post deleted SuccesFully ',
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: 'Something Went Wrong ',
      error: error,
    });
  }
};

// This Controller for Update Post
const Updatecard = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  console.log(decode);
  try {
    const id = req.params.id;
    const postforUpdation = await post.findById(id);

    if (postforUpdation.provided_by != decode.id) {
      return res.status(401).json({
        message: 'You Are not Able To Update This ',
      });
    }

    const UpdateData = req.body;
    const UpdateUser = await post.findByIdAndUpdate(id, UpdateData, {
      new: true,
      runValidators: true,
    });

    return res.status(201).json({
      message: 'Success',
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: 'SomeThing  Wrong ',
      details: error.message,
    });
  }
};
//  This Controller for Give The Post After Update
const getUpdatedContact = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  try {
    const id = req.params.id;
    const FindUser = await post.findById(id);

    console.log(' This User I am Find In  My Db', FindUser);
    console.log(FindUser.provided_by);
    console.log(decode);
    if (FindUser.provided_by != decode.id) {
      return res.status(401).json({
        message: ' You Are Not Update This Post ',
      });
    }

    // const FindUser = await post.findById(id);
    return res.json(FindUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error.message,
      message: 'Some Thing Went Wrong ... ',
    });
  }
};
//  This   Contrioller Give  All Post  do By an Specific  User
const Mypost = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const data = await post.find({
      provided_by: decode.id,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({
      details: error,
      message: 'Something went Wrong ',
    });
  }
};

export {
  accessitems,
  Senddata,
  Deletecard,
  Updatecard,
  getUpdatedContact,
  Mypost,
};
