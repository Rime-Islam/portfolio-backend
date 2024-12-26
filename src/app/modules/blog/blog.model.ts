import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String}
  },
  { timestamps: true }
);

const BlogSchema = new mongoose.Schema(
    {
      photo: { type: String, required: true },
      name: { type: String, required: true },
      description: { type: String, required: true },
      likesCount: { type: Number, default: 0 },
      likesUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      comments: [CommentSchema]  
    },
    { timestamps: true } 
  );
  
export const Blog = mongoose.model("Blog", BlogSchema);