var express = require("express");
var router = express.Router();

router.get(
  "/image/view/dee8b581-c12c-4354-95fc-8d843ca1bf78",
  async (req, res) => {
    res.render("image-views/image1");
  }
);

module.exports = router;
