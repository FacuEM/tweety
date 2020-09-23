const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const app = express();

app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views");

app.use(morgan("tiny"));

app.use(express.static("./public"));

app.use("/", routes);

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
