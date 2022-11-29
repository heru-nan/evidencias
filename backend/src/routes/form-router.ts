import express from "express";
import query from '../db';
import Publication from "../Models/Publication"

const router: express.Router = express.Router();

router.get("/pubs", async (_, res) => {
  const resPublicacion = await query(`select * from publicacion;`);

  res.json({
    data: resPublicacion,
    error: null,
  });
});

router.post("/pubs", async (req, res) => {
  const { body } = req;
  let error = true;
  if (!body){
    res.statusCode = 400;
    res.json({ data: [], error: "No existen argumentos" });
  }

  const { autores, titulo, revista, indexacion, autoresExtranjeros, issnDoi, anio, clasificacion, disciplina } = body;

  const publication = Publication.build(body)

  try {
    await publication.save()
  } catch (error) {
    console.log(error)
  }
  // try {
  //   const resInsertPub = await query(
  //     `insert into publicacion
  //     (issn_doi, titulo, autores, revista, autores_extranjeros, indexacion, anio,  clasificacion, disciplina)
  //     values ('${issnDoi}', '${titulo}', '${autores}', '${revista}','${autoresExtranjeros ? 1 : 0}', '${indexacion}', '${anio}','${clasificacion}','${disciplina}');`
  //   );
  //   error = false;

  //   console.log(resInsertPub.affectedRows);
  // } catch (error) {
  //   console.log(error);
  // }

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


const { autores, titulo, revista, indexacion, autoresExtranjeros, issnDoi, anio, clasificacion, disciplina, publicacionId } = body;
console.log(autores, autoresExtranjeros)

// publicacion_id int not null AUTO_INCREMENT primary key,
// issn_doi varchar(100) not null,
//   titulo varchar(100),
//   autores varchar(100),
//   revista varchar(100),
//   autores_extranjeros TINYINT(1),
//   indexacion varchar(100), 
//   anio varchar(100),
//   citaciones varchar(300),
//   clasificacion varchar(100),
//   disciplina varchar(100)

  try {
    const resInsertPub = await query(
      `UPDATE publicacion
      SET
      titulo = '${titulo}',
      autores = '${autores}',
      revista = '${revista}',
      autores_extranjeros = '${autoresExtranjeros}',
      indexacion = '${indexacion}',
      anio = '${anio}',
      clasificacion = '${clasificacion}',
      issn_doi = '${issnDoi}',
      disciplina = '${disciplina}'
      WHERE
      publicacion_id = ${publicacionId};`
    );
    error = false;

    console.log(resInsertPub);
  } catch (error) {
    console.log(error);
    console.log("fallo aqui")
    return res.json({
      data: [],
      error,
    });
  }

  
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
