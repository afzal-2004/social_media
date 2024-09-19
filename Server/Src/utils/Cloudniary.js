import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from 'fs';

console.log(process.env.CLOUDINARY_CLOUD_NAME || 'ddh00pzvb');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'ddh00pzvb',
  api_key: process.env.CLOUDINARY_API_KEY || '576911946581531',
  api_secret: process.env.CLODNIARY_API_SECRET || 'cjiKtB1gdNom1tvrBkiB-I5DUNA',
});

const uploadImage = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    fs.unlinkSync(localFilePath);
    console.log(uploadImage);

    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log('Error Uploading images :', error);
    return null;
  }
};

export { uploadImage };
