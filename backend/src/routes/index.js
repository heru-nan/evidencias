const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.get("/form", async (_, res) => {
  const resPublicacion = await db.query(`select * from publicacion;`);

  res.json({
    data: resPublicacion,
    error: null,
  });
});

router.post("/form", async (req, res) => {
  const { body } = req;
  if (!body)
    res.statusCode(400).json({ data: [], error: "No existen argumentos" });

  const { autores, titulo, revista, indexacion, identificador } = body;
  console.log({ autores, titulo, revista, indexacion, identificador });

  const resInsertPub = await db.query(
    `insert into publicacion
    (id_publicacion, anio_publicacion, nombre_publicacion, id_disciplina, clasificacion)
    values ('${identificador}', 2020, '${titulo}', 1, '${indexacion?.slice(
      0,
      10
    )}');`
  );

  console.log(resInsertPub);

  res.json({
    data: [],
    error: null,
  });
});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

module.exports = router;
