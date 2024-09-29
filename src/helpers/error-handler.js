export const error_handler = (err, res) => {
  return res.json({
    succes: false,
    message: "internal server error",
    error: err,
  });
};
