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
exports.projectService = void 0;
const project_model_1 = __importDefault(require("./project.model"));
const addProject = (projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const newProject = yield project_model_1.default.create(projectData);
    return newProject;
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.find().populate("technologies");
    return result;
});
const getSingleProject = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findOne({ _id }).populate("technologies");
    return result;
});
const deleteProject = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findOneAndDelete({ _id });
    return result;
});
const updateProject = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findByIdAndUpdate(_id, updateData, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.projectService = {
    addProject,
    getSingleProject,
    deleteProject,
    getAllProject,
    updateProject
};
