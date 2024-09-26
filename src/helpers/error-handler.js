export const error_handler = (err, res) => {
  return res.status(err.statusCode).json({
    succes: false,
    status: err.statusCode,
    message: "internal server error",
    info: err.message,
  });
};
