const db = require("../db.js");

const insert = async (name, filename) => {
  try {
    const resInsertPub = await db.query(
      `insert archivo
            (nombre, ruta)
            values ('${name}', '${filename}');`
    );

    console.log(resInsertPub);
    return resInsertPub;
  } catch (error) {
    console.log("service evidencias error: ", error);
    return null;
  }
};

const get = async () => {
  try {
    const resSelectArchivo = await db.query(`select * from archivo;`);

    return resSelectArchivo;
  } catch (error) {
    console.log("service evidencias error: ", error);
    return [];
  }
};

const link = async (id_archivo, id_fk, type) => {
  try {
    let resInsertPub = null;
    if (type === "pub") {
      resInsertPub = await db.query(
        `UPDATE archivo 
                SET 
                    id_fk_pub = ${id_fk}
                WHERE
                    id = ${id_archivo};
               `
      );
    } else {
      resInsertPub = await db.query(
        `UPDATE archivo 
                SET 
                    id_fk_pro = ${id_fk}
                WHERE
                    id = ${id_archivo};
               `
      );
    }

    console.log(resInsertPub);
    return resInsertPub;
  } catch (error) {
    console.log("service evidencias error: ", error);
    return error;
  }
};

module.exports = {
  insert,
  link,
  get,
};
