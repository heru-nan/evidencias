const db = require("../db.js");

const insert = (name, filename) => {
    
    try {
        const resInsertPub = await db.query(
            `insert archivo
            (name, filename)
            values ('${name}', '${filename}');`
          );

        console.log(resInsertPub)
        return resInsertPub;
    } catch (error) {
        console.log("service evidencias error: ", error)
        return error
    }
}

module.exports = {
    insert
}