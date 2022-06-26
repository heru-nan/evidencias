var express = require("express");
var app = express();
const routes = require("./routes");

// Config
const PORT = 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// end-points
app.use("/api", routes);

app.get("/", async function (_req, res) {
  res.json({
    desc: "Backend de aplicacion de envio de formularios",
    rutas: ["/api/"],
  });
});

app.listen(PORT, function () {
  console.log(` > listen on PORT: ${PORT}`);
});
