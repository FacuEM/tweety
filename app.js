const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const app = express();

app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views");

app.use(morgan("tiny"));

app.use(function (req, res, next) {
  const data = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
  res.render("index", { title: "Hall of Fame", personas: data });
});

app.use(express.static("./public"));

app.use(function (req, res, next) {
  console.log(chalk.yellow(req));
  next();
});
app.use("/special/", function (req, res, next) {
  console.log(chalk.blue("llegaste a un área especial"));
  next();
});

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
