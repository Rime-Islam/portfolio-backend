import { model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";

const SkillSchema = new Schema<ISkill>(
  {
    icon: {
      type: String,
      required: true, 
    },
    skillName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);
export const Skill = model<ISkill>("Skill", SkillSchema);