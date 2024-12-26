import { Types } from "mongoose";


export type TVote = {
    user: Types.ObjectId;
}

export type TComment = {
    _id?: any;
    user: Types.ObjectId;
    comment: string;
}
export type IBlog = {
    photo: string; 
    name: string; 
    description: string; 
    category: string; 
    likesCount?: number; 
    likesUsers?: Types.ObjectId; 
    comments?: TComment[];  
  }