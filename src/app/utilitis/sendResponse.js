
const sendResponce = (res, data) => {
res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
});
};

export default sendResponce;