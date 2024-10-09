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

    provided_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
export const post = mongoose.model('post', PostSchema);
