import { DataTypes} from "sequelize";
import sequelize from "../sequelize";
// create table archivo(
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     id_fk_pub int(6),
//     id_fk_pro int(6),
//     nombre varchar(255),
//     ruta varchar(255),
//     foreign key(id_fk_pub) references publicacion(`publicacion_id`)
// )

const File = sequelize.define('Files', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  idFkPub: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
  },
  ruta: {
    type: DataTypes.STRING,
  },
}, {
    tableName: "publicacion"
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(File === sequelize.models.File); // true