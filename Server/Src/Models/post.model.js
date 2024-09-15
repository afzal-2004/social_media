import mongoose, { model, Schema } from "mongoose";
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
      lowercase: true,
    },
    tags: {
      type: String,
      lowercase: true,
    },
    Filepath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const post = model("post", PostSchema);
