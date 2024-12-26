import catchAsync from "../../utilits/catchAsync";
import sendResponce from "../../utilits/sendResponce";
import { skillService } from "./skill.service";

const addSkill = catchAsync(async (req, res, next) => {
    const data = req.body;
    const result = await skillService.addSkill(data);
    sendResponce(res, {
      message: "Skill Added",
      success: true,
      statusCode: 200,
      data: result,
    });
  });
  
  const getAllSkill = catchAsync(async (req, res, next) => {
    const result = await skillService.getAllSkill();
    sendResponce(res, {
      message: "Skill fetched",
      success: true,
      statusCode: 200,
      data: result,
    });
  });
  
  const updateSkill = catchAsync(async (req, res, next) => {
    const result = await skillService.updateSkill(req.params.id, req.body);
    sendResponce(res, {
      message: "Skill updated",
      success: true,
      statusCode: 200,
      data: result,
    });
  });
  
  export const skillController = {
    addSkill,
    getAllSkill,
    updateSkill,
  };