import express from "express";
import multer from "multer"
import path from "path"

const ItemController = require("../controllers/item-controller");

// INIT MIDDLEWARE
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req: any, file: any, cb: any): void {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
// END MIDDLEWARE

const router = express.Router();
router.get("/items", ItemController.getItems);
router.post("/items/link", ItemController.linkItemWithFile);
// router.get("/item/:id", ItemController.getItemById);
router.post("/item", upload.single("file"), ItemController.createItem);
router.post("/item/link", ItemController.linkItemWithFile);
// router.put("/item/:id", ItemController.updateItem);
// router.delete("/item/:id", ItemController.deleteItem);

export default router
