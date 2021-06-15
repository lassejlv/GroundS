var express = require("express");
var router = express.Router();
var id = require("../json/img-ids.json");

router.get(`/image/${id.image1}`, async (req, res) => {
  res.render("image-views/image1");
});

router.get(`/image/${id.image2}`, async (req, res) => {
  res.send("Hello");
});

module.exports = router;
