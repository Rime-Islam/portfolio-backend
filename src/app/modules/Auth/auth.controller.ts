import catchAsync from "../../utilits/catchAsync";
import sendResponce from "../../utilits/sendResponce";
import { authService } from "./auth.service";




const userLogin = catchAsync(async (req, res, next) => {
    const userData = req.body;
    const result = await authService.userLogin(userData);
    sendResponce(res, {
      message: "User Created",
      success: true,
      statusCode: 200,
      data: result,
    });
  });
  
  export const authController = {
    userLogin,
  };