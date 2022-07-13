/* eslint-disable no-undef, arrow-body-style */

const { link, insert, get } = require("../services/files");

getItems = async (req, res) => {
  const items = await get();
  return res.json({ items });
};

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
  const filename = file.filename;

  const item = insert(req.body.name, filename);

  if (!item) {
    return res.status(500).json({ success: false });
  }

  return res.json({ success: true });
};

linkItemWithFile = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an item.",
    });
  }

  const { id_archivo, id_fk, type } = req.body;

  const item = link(id_archivo, id_fk, type);

  console.log(item);
};

module.exports = {
  getItems,
  createItem,
  linkItemWithFile,
};
