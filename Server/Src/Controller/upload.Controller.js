import { post } from '../Models/post.model.js';
import { uploadImage } from '../utils/Cloudniary.js';

const accessitems = async (req, res) => {
  try {
    post.find({}).then(function (data) {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: 'Something Went Wrong',
      details: error.message,
    });
  }

  // res.status(200).json({
  //   message: 'TestController',
  // });
};

const Senddata = async (req, res) => {
  const { Creator, Title, Message, tags } = req.body;

  // Access the uploaded file
  const File = req.file;
  const Clodniary = await uploadImage(File.path);

  const newdata = new post({
    Creator,
    Title,
    Message,
    tags,
    avtar: Clodniary.url || '',
  });

  const Data = await newdata.save();

  res.status(200).json({
    success: true,
    Data,
  });
};
const Deletecard = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(' id is this Send From  frountend', id);
    const DeletedContact = await post.findByIdAndDelete({ _id: id });
    if (!DeletedContact) {
      return res.status(401).json({
        message: 'Something Went Wrong',
        details: error.message,
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
    console.log(UpdateUser);
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
export { accessitems, Senddata, Deletecard, Updatecard, getUpdatedContact };
