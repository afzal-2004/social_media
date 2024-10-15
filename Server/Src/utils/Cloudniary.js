// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs';
// import dotenv from 'dotenv';
// dotenv.config({
//   path: './.env',
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadImage = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;
//     const uploadResult = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: 'auto',
//     });
//     fs.unlinkSync(localFilePath);
//     console.log(uploadImage);

//     return uploadResult;
//   } catch (error) {
//     fs.unlinkSync(localFilePath);
//     console.log('Error Uploading images :', error);
//     return null;
//   }
// };

// export { uploadImage };

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (fileBuffer) => {
  try {
    if (!fileBuffer) return null;

    // Upload the file directly from the buffer
    const uploadResult = await cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) {
          console.log('Error uploading image to Cloudinary:', error);
          return null;
        }
        console.log('Upload result:', result);
        return result;
      }
    );

    return new Promise((resolve, reject) => {
      const writeStream = uploadResult;
      writeStream.end(fileBuffer); // Send the buffer to Cloudinary
      writeStream.on('finish', resolve); // Resolve when upload finishes
      writeStream.on('error', reject); // Reject on error
    });
  } catch (error) {
    console.log('Error during Cloudinary upload:', error);
    return null;
  }
};

export { uploadImage };
