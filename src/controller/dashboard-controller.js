const get_table = (req, res) => {
  console.log(req.body);
};

const update_table = (req, res) => {
  console.log(req.body);
};

const upload_table = (req, res) => {
  console.log(req.body);
};

const delete_table = (req, res) => {
  console.log(req.body);
};

const delete_row_table = (req, res) => {
  console.log(req.body);
  res.json({ msg: "saliio bien" });
};

export const dashboard_controller = {
  get_table,
  update_table,
  upload_table,
  delete_table,
  delete_row_table,
};
