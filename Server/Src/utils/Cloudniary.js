import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_NAME,
    api_key: process.env.CLODNIARY_API_KEY,
    api_secret: process.env.CLODNIARY_API_SECRET,
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "shoes",
      }
    )
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);

  const optimizeUrl = cloudinary.url("shoes", {
    fetch_format: "auto",
    quality: "auto",
  });

  console.log(optimizeUrl);

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url("shoes", {
    crop: "auto",
    gravity: "auto",
    width: 300,
    height: 200,
  });

  console.log(autoCropUrl);
})();
