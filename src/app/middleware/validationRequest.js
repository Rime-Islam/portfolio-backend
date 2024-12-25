import catchAsync from "../utilits/catchAsync";


const validationRequest = (schema) => {
    return catchAsync(async (req, res, next) => {
        await schema.parseAsync({
            body: req.body,
        });
        return next();
    });
};

export default validationRequest;