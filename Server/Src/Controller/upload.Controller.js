import { post } from "../Models/post.model.js";
import { uploadimage } from "../utils/Cloudniary.js";
const accessitems = async (req, res) => {
  res.status(200).json({
    message: "TestController",
  });
};
const Senddata = async (req, res) => {
  const { Creator, Title, Message, tags, Filepath } = req.body;
  console.log(Creator, Title, Message, tags, Filepath);

  const Avtar = await uploadimage(Filepath);
  console.log(Avtar);
  const newdata = await post({
    Creator,
    Title,
    Message,
    tags,
    avtar: Avtar,
  });

  const Data = await newdata.save();

  res.status(200).json({
    success: true,
    newdata,
  });
};
export { accessitems, Senddata };
