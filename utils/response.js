const { statusCode, typeError } = require("../constants/response");
const { saveActionLog } = require("../utils/services");

const sendDataResponse = (res, message, data, { Data, req, action, isAuth }) => {
    saveActionLog(Data, req, action, `JSON: ${JSON.stringify(data)} | ${message}`, 'Success', isAuth);
    return res.status(statusCode.success).json({
        success: true,
        message,
        ...data
    });
}

const sendDataResponseApi = (res, message, data, { Data, req, action, isAuth }) => {
    return res.status(statusCode.success).json({
        success: true,
        message,
        ...data
    });
}

const genericResponse = (res, message, { Data, req, action, object, isAuth }) => {
    saveActionLog(Data, req, action, `${object} | ${message}`, 'Success', isAuth);
    return res.status(statusCode.success).json({
        success: true,
        message
    });
}

const internalError = (res, error, { Data, req, action, isAuth }) => {
    saveActionLog(Data, req, action, error, typeError.internalError, isAuth);
    return res.status(statusCode.internalError).json({
        success: false,
        typeError: typeError.internalError,
        error
     })
}

const badRequestError = (res, error, { Data, req, action, object, isAuth }) => {
    saveActionLog(Data, req, action, `${object} | ${error}`, typeError.badRequest, isAuth);
    return res.status(statusCode.badRequest).json({
        success: false,
        typeError: typeError.tecnico,
        error
    })
}


module.exports = {
    internalError,
    genericResponse,
    sendDataResponse,
    badRequestError,
    sendDataResponseApi
}