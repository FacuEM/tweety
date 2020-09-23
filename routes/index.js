const tweetBank = require("../tweetBank");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let tweets = tweetBank.list();
  res.render("index", { tweets: tweets });
});

router.get("/users/:name", function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({ name: name });
  res.render("index", { tweets: list });
});

router.get("/tweets/:id", function (req, res) {
  var id = parseInt(req.params.id);
  console.log(id);
  var tw = tweetBank.find({ id: id });
  console.log(tw);
  res.render("index", { tweets: tw });
});
module.exports = router;
