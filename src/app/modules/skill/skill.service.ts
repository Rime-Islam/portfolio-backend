import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

const addSkill = async (data: ISkill) => {
 
    const result = await Skill.create(data);
  
    return result;
  };
  
  const getAllSkill = async () => {
    const result = await Skill.find();
  
    return result;
  };

  const deleteSkill = async (_id: string) => {
    const result = await Skill.findOneAndDelete({ _id });
    return result;
  };

  const updateSkill = async (_id: string, data: { data: Partial<ISkill> }) => {
  
    const result = await Skill.findOneAndUpdate({ _id }, data, {
      new: true,
    });
   
    return result;
  };

  export const skillService = {
    addSkill,
    getAllSkill,
    updateSkill,
    deleteSkill
  };