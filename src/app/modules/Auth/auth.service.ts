import jwt from 'jsonwebtoken';
import { accesstoken } from './auth.utlils';
import AppError from "../../Error/AppError";
import { TUser, TUserLogin} from "./auth.interfase";
import { User } from "./auth.model";
import config from '../../config';


const register = async (payload: TUser) => {
    const user = await User.findOne({ email: payload.email });

    if(user) {
        throw new AppError(400, "User already exists!");
    }
    payload.role = payload.role;
    const newuser = await User.create(payload);
    return newuser;
}

const loginUser = async (payload: TUserLogin) => {
    const user = await User.isUserExistByCustomerId(payload.email);
  
    if (!user) {
        throw new AppError(400, "User not exists!");
    }
    if (!(await User.isPasswordMatched(payload.password, user.password))) {
        throw new AppError(400, "Wrong Password!");
    }
  
    const jwtPayload = {
      email: user.email,
      role: user.role,
      name: user.name,
      phone: user.phone,
      address: user.address,
      _id: user._id
    };

    const accessToken = accesstoken(
        jwtPayload,
        config.jwt_access_token as string,
        "7d"
    );
    const token = `${accessToken}`;

    const accessRefreshToken = accesstoken(
        jwtPayload,
        config.jwt_refresh_token as string,
        "1y"
    );

    return {
        token,
        accessRefreshToken,
        user
    };
};

const getAllUser = async () => {
    const result = await User.find();
    return result;
};

const getSingleUser = async (id: string) => {
    const result = await User.findById(id);
    return result;
};

const updateUser = async ( id: string, payload: TUser ) => {
    const result = await User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    })
    return result;
}

export const AuthService = {
    register,
    loginUser,
    getAllUser,
    getSingleUser,
    updateUser,
};