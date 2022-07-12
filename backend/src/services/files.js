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
    return error;
  }
};

const link = async (id_archivo, id_fk, type) => {
  try {
    let resInsertPub = null;
    if (type === "publicacion") {
      resInsertPub = await db.query(
        `UPDATE archivo 
                SET 
                    id_fk_pub = ${id_fk}
                WHERE
                    id = ${id_archivo};
               `
      );
    } else {
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
};
