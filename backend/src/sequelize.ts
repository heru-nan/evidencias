
import {Sequelize} from "sequelize";
import config from "./config"

const {user, password, database, host, port} = config.db;

const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
    port,
    host,
    dialectOptions: {
    }
  })

export default sequelize;