/* eslint-disable no-undef, arrow-body-style */
getItems = async (req, res) => {};

createItem = (req, res) => {
  const body = req.body;
  const file = req.file;
  // console.log('----------------------- createItem: req -----------------------')
  // console.log(req);
  // console.log('----------------------- createItem: body -----------------------')
  // console.log(body);

  if (!body || !file) {
    return res.status(400).json({
      success: false,
      error: "You must provide an item.",
    });
  }
  console.log(file);
  const filename = file.originalname;

  const myItem = {
    name: req.body.name,
    filename,
    content: "...",
  };

  const item = {};

  if (!item) {
    console.error(`400 in 'createItem': 'item' is malformed.`);
    return res.status(400).json({
      success: false,
      message: "'item' is malformed",
    });
  }

  // console.log('----------------------- createItem: item -----------------------')
  // console.log(item);

  return true;
};

module.exports = {
  getItems,
  createItem,
};
