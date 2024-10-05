import jwt from 'jsonwebtoken';

import { post } from '../Models/post.model.js';
import { uploadImage } from '../utils/Cloudniary.js';

const accessitems = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];
  // const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  // console.log(
  //   ' This Is decoded Items For my Access Items On a Particulear user Login',
  //   decode
  // );
  // console.log(
  //   ' This Is decoded Items For my Access Items On a Particulear user Login',
  //   decode.id
  // );
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
const Deletecard = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const Userid = decode.id;

  try {
    const id = req.params.id;
    const postToDelete = await post.findById({ _id: id });

    if (postToDelete.provided_by != Userid) {
      return res.status(403).json({
        message: 'You are not authorized to delete this post',
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
const Updatecard = async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateData = req.body;
    const UpdateUser = await post.findByIdAndUpdate(id, UpdateData, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
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

const getUpdatedContact = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const FindUser = await post.findById(id);
    return res.json(FindUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error.message,
      message: 'Some Thing Went Wrong ... ',
    });
  }
};
const LikePost = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  try {
    const id = req.params.id;
    const { like } = req.body;
    const Post = await post.findByIdAndUpdate(
      id,
      { $inc: { like: 1 } }, // Increment the like field by 1
      { new: true, runValidators: true } // Return the updated document
    );
    if (!Post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json(Post);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: 'SomeThing Went wrong',
      details: error.details,
    });
  }
};
const Mypost = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(' decoded token on Backend is ', decode);
    // console.log('decode  token id In Backend is ', decode.id);

    const data = await post.find({
      provided_by: decode.id,
    });
    // console.log(
    //   'data On Backend console User That  he Posted on the web is ',
    //   data
    // );
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
  LikePost,
  Mypost,
};
