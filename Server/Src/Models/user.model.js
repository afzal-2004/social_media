import mongoose, { model, Schema } from 'mongoose';
const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lstname: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
    DOB: {
      type: String,
    },
    MobileNumber: {
      type: String,
    },
  },
  { timestamps: true }
);
export const user = model('user', UserSchema);
