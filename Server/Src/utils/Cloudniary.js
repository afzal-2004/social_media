import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
cloudinary.config({
  cloud_name: "ddh00pzvb",
  api_key: "576911946581531",
  api_secret: "cjiKtB1gdNom1tvrBkiB-I5DUNA",
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
