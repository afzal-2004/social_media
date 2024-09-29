import mongoose, { model, Schema } from 'mongoose';
const PostSchema = new Schema(
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
      unique: true,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);
export const post = model('post', PostSchema);
