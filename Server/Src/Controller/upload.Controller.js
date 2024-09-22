import { post } from '../Models/post.model.js';
import { uploadImage } from '../utils/Cloudniary.js';

const accessitems = async (req, res) => {
  try {
    post.find({}).then(function (data) {
      res.json(data);
      console.log(data);
    });
    // res.status(200).json({
    //   message: 'TestController',
    // });
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
  // console.log('Cloudniary', Clodniary);
  console.log('Cloudniary Url :', Clodniary.url);
  // const newdata = { Creator, Title, Message, tags, Clodniary };
  console.log('Form Data:');
  console.log({
    Creator,
    Title,
    Message,
    tags,
    file: File ? File.path : null,
  });
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
export { accessitems, Senddata };
