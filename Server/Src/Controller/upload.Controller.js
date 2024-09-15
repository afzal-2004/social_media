import { post } from "../Models/post.model.js";
import { uploadimage } from "../utils/Cloudniary.js";
const accessitems = async (req, res) => {
  res.status(200).json({
    message: "TestController",
  });
};
const Senddata = async (req, res) => {
  const { Creator, Title, Message, tags, Filepath } = req.body;

  const avtar = uploadimage(Filepath);
  const newdata = await post({
    Creator,
    Title,
    Message,
    tags,
    Filepath: avtar,
  });

  const Data = await newdata.save();

  res.status(200).json({
    success: true,
    Data,
  });
};
export { accessitems, Senddata };
