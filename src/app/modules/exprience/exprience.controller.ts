import catchAsync from "../../utilits/catchAsync";
import sendResponce from "../../utilits/sendResponce";
import { ExprienceService } from "./exprience.service";

const addExprience = catchAsync(async (req, res, next) => {
    const ExprienceData = req.body;
    const result = await ExprienceService.addExprience(ExprienceData);
    sendResponce(res, {
      message: "Exprience Added Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const getAllExprience = catchAsync(async (req, res, next) => {
    const result = await ExprienceService.getAllExprience();
    sendResponce(res, {
      message: "Exprience fetched Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  const getSingleExprience = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await ExprienceService.getSingleExprience(id);
    sendResponce(res, {
      message: "Exprience is fetched Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const deleteExprience = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await ExprienceService.deleteExprience(id);
    sendResponce(res, {
      message: "Exprience is deleted Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });

  const updateExprience = catchAsync(async (req, res, next) => {
    const { id } = req.params; 
    const updateData = req.body; 
    const result = await ExprienceService.updateExprience(id, updateData); 
    sendResponce(res, {
        message: "Exprience is update Successfully",
        success: true,
        statusCode: 201,
        data: result,
      });
});

  export const exprienceController = {
    addExprience,
    getAllExprience,
    getSingleExprience,
    deleteExprience,
    updateExprience,
  };