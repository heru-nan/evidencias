import express from "express";
import multer from "multer";
import path from "path";
import File from "../Models/File";

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

router.get("/files", async (req, res) => {
  const files = await File.findAll();
  res.json({ data: files, error: false });
});

router.post("/files", upload.single("file"), async (req, res) => {
  const resFile = req.file;

  console.log(resFile);

  if (!resFile)
    res.json({
      data: "Error al agregar un archivo",
      error: "No existe un archivo",
    });

  const file = File.build({
    nombre: resFile?.originalname,
    ruta: resFile?.path,
  });

  try {
    await file.save();
    res.json({
      data: "Archivo guardado correctamente",
      error: false,
      ruta: path.resolve(resFile?.path || "")?.replace(/\\/g, "/"),
    });
  } catch (error) {
    res.json({
      data: "Error al guardar archivo",
      error,
    });
  }
});

// router.get("/items", ItemController.getItems);
// router.post("/items/link", ItemController.linkItemWithFile);
// // router.get("/item/:id", ItemController.getItemById);
// router.post("/item", upload.single("file"), ItemController.createItem);
// router.post("/item/link", ItemController.linkItemWithFile);
// // router.put("/item/:id", ItemController.updateItem);
// // router.delete("/item/:id", ItemController.deleteItem);

export default router;
