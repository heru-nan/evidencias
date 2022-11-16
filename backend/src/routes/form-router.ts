import express from "express";
import query from '../db';

const router: express.Router = express.Router();

router.get("/form", async (_, res) => {
  const resPublicacion = await query(`select * from publicacion;`);

  res.json({
    data: resPublicacion,
    error: null,
  });
});

router.get("/form/pro", async (_, res) => {
  const resPublicacion = await query(`select * from proyecto;`);

  res.json({
    data: resPublicacion,
    error: null,
  });
});

router.post("/form", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body){
    res.statusCode = 400;
    res.json({ data: [], error: "No existen argumentos" });

  }

  const { autores, titulo, revista, indexacion, autoresExtranjeros, issnDoi, anio, clasificacion, disciplina } = body;

  try {
    const resInsertPub = await query(
      `insert into publicacion
      (issn_doi, titulo, autores, revista, autores_extranjeros, indexacion, anio,  clasificacion, disciplina)
      values ('${issnDoi}', '${autores}', '${titulo}', '${revista}','${autoresExtranjeros}', '${indexacion}', '${anio}','${clasificacion}','${disciplina}');`
    );
    error = false;

    console.log(resInsertPub.affectedRows);
  } catch (error) {
    error = true;
    console.log(error);
  }

  res.json({
    data: error ? "Error al subir los cambios": "Correctamente subidos los cambios",
    error,
  });
});

router.post("/form/pro", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body)
  {
    res.statusCode = 400
    res.json({ data: [], error: "No existen argumentos" })
  }
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
    const resInsertPub = await query(
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

router.post("/form/update/pub", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body){
    res.statusCode = 400
    res.json({ data: [], error: "No existen argumentos" });
}
  // id_publicacion int(6) not null,
  // nombre_publicacion varchar(100),
  // anio year,
  // revista varchar(100),
  // indexacion varchar(100),
  // citaciones varchar(300),
  // clasificacion varchar(100),
  // disciplina int(6),
  // primary key(`id_publicacion`),

  const {
    id_publicacion,
    nombre_publicacion,
    anio,
    revista,
    indexacion,
    citaciones,
    clasificacion,
    disciplina,
  } = body;

  console.log({
    id_publicacion,
    nombre_publicacion,
    anio,
    revista,
    indexacion,
    citaciones,
    clasificacion,
    disciplina,
  });

  try {
    const resInsertPub = await query(
      `UPDATE publicacion
      SET
      nombre_publicacion = '${nombre_publicacion}',
      anio = ${anio + 0},
      revista = '${revista}',
      indexacion = '${indexacion}',
      citaciones = '${citaciones}',
      clasificacion = '${clasificacion}'
      WHERE
      id_publicacion = ${id_publicacion};`
    );
    error = false;

    console.log(resInsertPub);
  } catch (error) {
    console.log(error);
  }

  return res.json({
    data: [],
    error,
  });
});

router.post("/form/update/pro", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body){
    res.statusCode =400;
    res.json({ data: [], error: "No existen argumentos" });
  }
  // id_proyecto int(6) not null AUTO_INCREMENT,
  //     palabras_clave varchar(300),
  //     anio varchar(300),
  //     codigo varchar(300),
  //     nombre varchar(100),
  //     objetivo varchar(300),
  //     fuente_financiamiento varchar(300),
  //     concurso varchar(300),
  //     presupuesto varchar(300),
  //     fecha_inicio varchar(300),
  //     fecha_termino varchar(300),
  //     primary key(`id_proyecto`)
  const {
    id_proyecto,
    palabras_clave,
    anio,
    codigo,
    nombre,
    objetivo,
    fuente_financiamiento,
    concurso,
    presupuesto,
    fecha_inicio,
    fecha_termino,
  } = body;

  console.log({
    id_proyecto,
    palabras_clave,
    anio,
    codigo,
    nombre,
    objetivo,
    fuente_financiamiento,
    concurso,
    presupuesto,
    fecha_inicio,
    fecha_termino,
  });

  try {
    const resInsertPub = await query(
      `UPDATE proyecto
      SET
      palabras_clave = '${palabras_clave}',
      anio = '${anio}',
      codigo = '${codigo}',
      nombre = '${nombre}',
      objetivo = '${objetivo}',
      fuente_financiamiento = '${fuente_financiamiento}',
      concurso = '${concurso}',
      presupuesto = '${presupuesto}',
      fecha_inicio = '${fecha_inicio}',
      fecha_termino = '${fecha_termino}'
        WHERE
      id_proyecto = ${id_proyecto};`
    );
    error = false;

    console.log(resInsertPub);
  } catch (error) {
    console.log(error);
  }

  return res.json({
    data: [],
    error,
  });
});

export default router
