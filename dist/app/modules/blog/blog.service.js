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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const blog_model_1 = require("./blog.model");
const addBlog = (projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const newProject = yield blog_model_1.Blog.create(projectData);
    return newProject;
});
const getAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find();
    console.log(result, { depth: true });
    return result;
});
const getSingleBlog = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findOne({ _id });
    console.log(result, { depth: true });
    return result;
});
const updateBlog = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findOneAndUpdate({ _id }, data.data);
    return result;
});
const deleteBlog = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findOneAndDelete({ _id });
    return result;
});
exports.blogService = {
    addBlog,
    getAllBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
