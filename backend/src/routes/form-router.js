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

router.get("/form/pro", async (_, res) => {
  const resPublicacion = await db.query(`select * from proyecto;`);

  res.json({
    data: resPublicacion,
    error: null,
  });
});

// id_publicacion int(6) not null,
//     nombre_publicacion varchar(100),
//     anio year,
//     archivo varchar(100),
//     revista varchar(100),
//     citaciones varchar(300),
//     clasificacion varchar(100),
//     disciplina int(6),

router.post("/form", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body)
    res.statusCode(400).json({ data: [], error: "No existen argumentos" });

  const { autores, titulo, revista, indexacion, identificador } = body;

  console.log({ autores, titulo, revista, indexacion, identificador });

  try {
    const resInsertPub = await db.query(
      `insert into publicacion
      (id_publicacion, nombre_publicacion, revista, indexacion)
      values ('${identificador}', '${titulo}', '${revista}', '${indexacion}');`
    );
    error = false;

    console.log(resInsertPub.affectedRows);
  } catch (error) {
    console.log(error);
  }

  res.json({
    data: [],
    error,
  });
});

router.post("/form/pro", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body)
    res.statusCode(400).json({ data: [], error: "No existen argumentos" });

  const {
    nombre,
    ffinanciamiento,
    concurso,
    codigo,
    añoAdjudicacion,
    fechaInicio,
    fechaTermino,
    montoTotal,
    palabrasClaves,
    objetivos,
  } = body;

  console.log({
    nombre,
    ffinanciamiento,
    concurso,
    codigo,
    añoAdjudicacion,
    fechaInicio,
    fechaTermino,
    montoTotal,
    palabrasClaves,
    objetivos,
  });

  try {
    const resInsertPub = await db.query(
      `insert into proyecto
      (palabras_clave, anio, codigo, nombre, objetivo, fuente_financiamiento, concurso, fecha_inicio, fecha_termino, presupuesto)
      values ('${palabrasClaves}', ${añoAdjudicacion}, '${codigo}', '${nombre}',
      '${objetivos}', '${ffinanciamiento}','${concurso}', '${fechaInicio}'
      ,'${fechaTermino}', '${montoTotal}');`
    );
    error = false;

    console.log(resInsertPub.affectedRows);
  } catch (error) {
    console.log(error);
  }

  res.json({
    data: [],
    error,
  });
});

module.exports = router;
