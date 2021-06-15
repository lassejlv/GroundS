// Imports
const express = require("express");
const app = express();
const port = process.env.PORT || 4200;

// Images imports Routes with ID's
var imageIDS = require("./routes/backgrounds");

// Images Use's width id
app.use(imageIDS);

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index", { text: "This is EJS" });
});

//  APP settings
app.listen(port, () => console.info(`Listening on port ${port}`));
