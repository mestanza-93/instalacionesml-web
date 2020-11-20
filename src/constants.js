const path = require("path");


module.exports = Object.freeze({
  PORT: process.env.PORT || 8080,
  VIEWS_PATH: path.join(__dirname + "/views/"),
});