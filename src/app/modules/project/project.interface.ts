import { Schema } from "mongoose";

export interface IProject extends Document {
  photo: string[]; 
  name: string; 
  description: string; 
  features: string[]; 
  technologies: Schema.Types.ObjectId[]; 
  client: string;
  server: string; 
  live: string; 
}