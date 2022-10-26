var express = require("express");
var app = express();
const formRoutes = require("./routes/form-router");
const itemRoutes = require("./routes/item-router");

// Config
const PORT = 5000;

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
app.use("/api", formRoutes);
app.use("/api", itemRoutes);

app.get("/", async function (_req: any, res: { json: (arg0: { desc: string; rutas: string[]; }) => void; }) {
  res.json({
    desc: "Backend de aplicacion de envio de formularios",
    rutas: ["/api/"],
  });
});

app.listen(PORT, function () {
  console.log(` > listen on PORT: ${PORT}`);
});
