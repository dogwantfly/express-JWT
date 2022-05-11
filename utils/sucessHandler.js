function handleSuccess (res, data, statusCode = 200, token) {
  let obj = {
    status: 'success',
    data,
  }
  if (token) {
    obj.token = token;
  }
  if (data) {
    obj.results = data.length
  }
  res.status(statusCode).json(obj);
}

module.exports = handleSuccess;