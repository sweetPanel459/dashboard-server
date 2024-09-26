export const response_handler = (data, err) => {
  if (err) return res.json({ success: false, error: err.message || err });
  else res.json({ success: true, data });
};
