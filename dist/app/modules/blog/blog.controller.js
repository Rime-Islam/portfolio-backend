"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const catchAsync_1 = __importDefault(require("../../utilits/catchAsync"));
const sendResponce_1 = __importDefault(require("../../utilits/sendResponce"));
const blog_service_1 = require("./blog.service");
const addBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogData = req.body;
    const result = yield blog_service_1.blogService.addBlog(blogData);
    (0, sendResponce_1.default)(res, {
        message: "Blog Added Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const getAllBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("object");
    const result = yield blog_service_1.blogService.getAllBlog();
    (0, sendResponce_1.default)(res, {
        message: "Blogs fetched Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const getSingleBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.getSingleBlog(id);
    (0, sendResponce_1.default)(res, {
        message: "Blog is fetched Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const updateBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.updateBlog(id, req.body);
    (0, sendResponce_1.default)(res, {
        message: "Blog is updated Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.deleteBlog(id);
    (0, sendResponce_1.default)(res, {
        message: "Blog is deleted Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
exports.blogController = {
    addBlog,
    getAllBlog,
    deleteBlog,
    getSingleBlog,
    updateBlog,
};
