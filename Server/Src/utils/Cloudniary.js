import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDNIARY_NAME,
  api_key: process.env.CLODNIARY_API_KEY,
  api_secret: process.env.CLODNIARY_API_SECRET,
});

const uploadImage = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    console.log(uploadImage);

    return uploadImage;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error Uploading images :", error);
    return null;
  }
};

export { uploadImage };
