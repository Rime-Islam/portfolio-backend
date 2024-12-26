import catchAsync from "../../utilits/catchAsync";
import sendResponce from "../../utilits/sendResponce";
import { userService } from "./user.service";

const createUser = catchAsync(async (req, res, next) => {
    const userData = req.body;
    const result = await userService.createUser(userData);
    sendResponce(res, {
      message: "User Created",
      success: true,
      statusCode: 200,
      data: result,
    });
  });
  
  export const UserController = {
    createUser,
  };