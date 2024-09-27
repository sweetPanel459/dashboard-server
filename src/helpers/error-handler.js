export const error_handler = (err, res) => {
  return res.status(err.statusCode).json({
    succes: false,
    message: "internal server error",
    info: err.message,
    status: err.statusCode,
  });
};
