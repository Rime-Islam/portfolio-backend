import catchAsync from "../../utilits/catchAsync";
import sendResponce from "../../utilits/sendResponce";
import { blogService } from "./blog.service";

const addBlog = catchAsync(async (req, res, next) => {
    const blogData = req.body;
    const result = await blogService.addBlog(blogData);
    sendResponce(res, {
      message: "Blog Added Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const getAllBlog = catchAsync(async (req, res, next) => {
    console.log("object");
    const result = await blogService.getAllBlog();
    sendResponce(res, {
      message: "Blogs fetched Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const getSingleBlog = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await blogService.getSingleBlog(id);
    sendResponce(res, {
      message: "Blog is fetched Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  
  const updateBlog = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await blogService.updateBlog(id, req.body);
    sendResponce(res, {
      message: "Blog is updated Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  const deleteBlog = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await blogService.deleteBlog(id);
    sendResponce(res, {
      message: "Blog is deleted Successfully",
      success: true,
      statusCode: 201,
      data: result,
    });
  });
  export const blogController = {
    addBlog,
    getAllBlog,
    deleteBlog,
    getSingleBlog,
    updateBlog,
  };