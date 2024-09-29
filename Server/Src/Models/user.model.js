import mongoose, { model, Schema } from 'mongoose';
const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
      lowercase: true,
    },
    lstname: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const user = model('user', UserSchema);
