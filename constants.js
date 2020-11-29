const path = require("path");


module.exports = Object.freeze({
  PORT: process.env.PORT || 8080,
  VIEWS_PATH: path.join(__dirname, "src/views/"),
  ASSETS_PATH: path.join(__dirname, 'src/assets/'),
  CSS_PATH: path.join(__dirname, 'src/css/'),
  JS_PATH: path.join(__dirname, 'src/js/'),

  ICONS_CSS: path.join(__dirname, "node_modules/font-awesome"),
  BOOTSTRAP_CSS: path.join(__dirname, "node_modules/bootstrap/dist/css"),
  BOOTSTRAP_JS: path.join(__dirname, "node_modules/bootstrap/dist/js"),
  JQUERY: path.join(__dirname, "node_modules/jquery/dist")
});