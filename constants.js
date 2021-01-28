const path = require("path");


module.exports = Object.freeze({
  PORT: process.env.PORT || 8080,
  ROOT: path.join(__dirname, "/"),
  VIEWS_PATH: path.join(__dirname, "src/views/"),
  CONFIG_PATH: path.join(__dirname, "src/config/"),
  ASSETS_PATH: path.join(__dirname, 'src/assets/'),
  CSS_PATH: path.join(__dirname, 'src/css/'),
  JS_PATH: path.join(__dirname, 'src/js/'),
  ROBOTS_PATH: path.join(__dirname, 'robots.txt'),
  SITEMAP_PATH: path.join(__dirname, 'sitemap.xml'),

  ICONS_CSS: path.join(__dirname, "node_modules/font-awesome"),
  BOOTSTRAP_CSS: path.join(__dirname, "node_modules/bootstrap/dist/css"),
  BOOTSTRAP_JS: path.join(__dirname, "node_modules/bootstrap/dist/js"),
  JQUERY: path.join(__dirname, "node_modules/jquery/dist")
});