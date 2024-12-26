import catchAsync from "../../utilits/catchAsync";
import sendResponce from "../../utilits/sendResponce";
import { projectService } from "./project.service";

const addProject = catchAsync(async (req, res, next) => {
    const projectData = req.body;
    const result = await projectService.addProject(projectData);
    sendResponce(res, {
      message: "Project Added Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const getAllProject = catchAsync(async (req, res, next) => {
    const projectData = req.body;
    const result = await projectService.getAllProject();
    sendResponce(res, {
      message: "Project fetched Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  const getSingleProject = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await projectService.getSingleProject(id);
    sendResponce(res, {
      message: "Project is fetched Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const deleteProject = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await projectService.deleteProject(id);
    sendResponce(res, {
      message: "Project is deleted Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });

  const updateProject = catchAsync(async (req, res, next) => {
    const { id } = req.params; 
    const updateData = req.body; 
    const result = await projectService.updateProject(id, updateData); 
    sendResponce(res, {
        message: "Project is update Successfully",
        success: true,
        statusCode: 201,
        data: result,
      });
});

  export const projectController = {
    addProject,
    getAllProject,
    getSingleProject,
    deleteProject,
    updateProject,
  };