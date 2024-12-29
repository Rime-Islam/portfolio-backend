import { IExperience } from "./exprience.interface";
import Experience from "./exprience.model";


const addExprience = async (ExprienceData: IExperience) => {
    const newExprience = await Experience.create(ExprienceData);
    return newExprience;
  };
  const getAllExprience = async () => {
    const result = await Experience.find().populate("technologies");
  
    return result;
  };
  const getSingleExprience = async (_id: string) => {
    const result = await Experience.findOne({ _id }).populate("technologies");
    return result;
  };
  const deleteExprience = async (_id: string) => {
    const result = await Experience.findOneAndDelete({ _id });
    return result;
  };
  const updateExprience = async (_id: string,  updateData: IExperience) => {
    const result = await Experience.findByIdAndUpdate(
        _id,
        updateData,
        {
          new: true, 
          runValidators: true, 
        }
      );
    return result;
  };
  export const ExprienceService = {
    addExprience,
    getSingleExprience,
    deleteExprience,
    getAllExprience,
    updateExprience
  };