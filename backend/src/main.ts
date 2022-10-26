// // var express = require("express");
// const formRoutes = require("./routes/form-router");
// const itemRoutes = require("./routes/item-router");

import express from "express"
import sequelize from './sequelize';
// import formRoutes from "./routes/form-router";
// import itemRoutes from "./routes/item-router";

const app = express();

// Config
const PORT = 5000;

const tryConnection = async () => {
  console.log("TRY ...")
  console.log(sequelize)
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} 


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// end-points
// app.use("/api", formRoutes);
// app.use("/api", itemRoutes);

app.get("/", async function (_req: any, res: { json: (arg0: { desc: string; rutas: string[]; }) => void; }) {
  await tryConnection()
  res.json({
    desc: "Backend de aplicacion de envio de formularios",
    rutas: ["/api/"],
  });
});

app.listen(PORT, function () {
  console.log(` > listen on PORT: ${PORT}`);
});
