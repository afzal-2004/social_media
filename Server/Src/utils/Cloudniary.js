import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDNIARY_NAME,
  api_key: process.env.CLODNIARY_API_KEY,
  api_secret: process.env.CLODNIARY_API_SECRET,
});

async function uploadimage(filePath) {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      public_id: "file",
    });

    console.log(uploadResult);
    return uploadResult.secure_url;
  } catch (error) {
    console.log("Error Uploading images :", error);
  }
}

export { uploadimage };
