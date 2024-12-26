
import bcrypt from "bcrypt";
import { User } from "./user.model";
import config from "../../config";

const createUser = async (data: {
    email: string;
    password: string;
    role: string;
  }) => {
    console.log(data);
    const hasedPass = await bcrypt.hash(data.password.toString(), 10);
  
    const result = await User.create({ ...data, password: hasedPass });
    const userWithoutPassword = await User.findById(result._id).select(
      "-password"
    );
    return userWithoutPassword;
  };
  
  export const userService = {
    createUser,
  };