const appError = (httpStatus, errMessage, next) => {
  const error = new Error(errMessage);
  error.statusCode = httpStatus;
  error.isOperational = true; // 可預期錯誤
  error.status = false;
  next(error);
}

module.exports = appError;