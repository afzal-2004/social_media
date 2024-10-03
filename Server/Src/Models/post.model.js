import mongoose from 'mongoose';
const PostSchema = new mongoose.Schema(
  {
    Creator: {
      type: String,
      required: true,
      lowercase: true,
    },
    Title: {
      type: String,
      required: true,
      lowercase: false,
    },
    Message: {
      type: String,
    },

    avtar: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    provided_by: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);
export const post = mongoose.model('post', PostSchema);
