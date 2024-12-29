import { model, Schema } from "mongoose";
import { IExperience } from "./exprience.interface";


const experienceSchema = new Schema<IExperience>(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    yearsOfExperience: {
      type: String,
      required: true,
      min: 0, 
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    technologies: {
        type: [String],
        required: true,
      },
    employmentType: {
      type: [String],
      required: true,
      enum: ["Full-time", "Internship", "Part-time", "Contract", "Internship"], // Optional: Restricts values to these types
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: [String],
      required: true,
      enum: ["Remote", "Onsite", "Hybrid"],
    },
  },
  {
    timestamps: true, 
  }
);

const Experience = model<IExperience>("Experience", experienceSchema);
export default Experience;
