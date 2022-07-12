/* eslint-disable no-undef, arrow-body-style */

const { link, insert } = require("../services/files");

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

  const filename = file.originalname;

  const item = insert(req.body.name, filename);

  console.log(item);

  // if (!item) {
  //   console.error(`400 in 'createItem': 'item' is malformed.`);
  //   return res.status(400).json({
  //     success: false,
  //     message: "'item' is malformed",
  //   });
  // }

  // console.log('----------------------- createItem: item -----------------------')
  // console.log(item);

  return true;
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
