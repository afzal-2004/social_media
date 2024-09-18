import { post } from "../Models/post.model.js";
import { uploadImage } from "../utils/Cloudniary.js";

const accessitems = async (req, res) => {
  res.status(200).json({
    message: "TestController",
  });
};
const Senddata = async (req, res) => {
  const { Creator, Title, Message, tags } = req.body;

  // Access the uploaded file
  const File = req.file;
  const Clodniary = await uploadImage(File.path);
  console.log("Cloudniary", Clodniary);
  // const newdata = { Creator, Title, Message, tags, Clodniary };
  console.log("Form Data:");
  console.log({
    Creator,
    Title,
    Message,
    tags,
    file: File ? File.path : null,
  });
  // const newdata = new post({
  //   Creator,
  //   Title,
  //   Message,
  //   tags,
  //   file: file ? Clodniary : null,
  // });

  // const Data = await newdata.save();

  // res.status(200).json({
  //   success: true,
  //   newdata,
  // });
};
export { accessitems, Senddata };
