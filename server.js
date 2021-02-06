const express = require("express");
const app = express();
const path = require("path");
const constants = require("./constants");

const router = express.Router();

app.enable('trust proxy');

// NODE MODULES
app.use("/bootstrap-css", express.static(path.join(constants.BOOTSTRAP_CSS)));
app.use("/bootstrap-js", express.static(path.join(constants.BOOTSTRAP_JS)));
app.use("/jquery", express.static(path.join(constants.JQUERY)));
app.use("/icons", express.static(path.join(constants.ICONS_CSS)));

// CONFIG
app.use("/config", express.static(constants.CONFIG_PATH));

// ASSETS
app.use("/assets", express.static(constants.ASSETS_PATH));

// CSS
app.use("/css", express.static(constants.CSS_PATH));

// VIEWS
app.use("/views", express.static(constants.VIEWS_PATH));

// JS
app.use("/js", express.static(constants.JS_PATH));

// ROUTER
router.get("/", (req, res) => {
  res.sendFile(path.join(constants.VIEWS_PATH + "home.html"));
});

router.get("/placas-solares-malaga", (req, res) => {
  res.sendFile(path.join(constants.VIEWS_PATH + "home.html"));
});

router.get("/productos-energia-solar", (req, res) => {
  res.sendFile(path.join(constants.VIEWS_PATH + "products.html"));
});

router.get("/instalaciones-placas-solares", (req, res) => {
  res.sendFile(path.join(constants.VIEWS_PATH + "installations.html"));
});

router.get("/reparaciones-placas-solares", (req, res) => {
  res.sendFile(path.join(constants.VIEWS_PATH + "maintenance.html"));
});

router.get("/aviso-legal", (req, res) => {
  res.sendFile(path.join(constants.VIEWS_PATH + "legal.html"));
});

router.get("/robots.txt", (req, res) => {
  res.sendFile(constants.ROBOTS_PATH);
});

router.get("/site.webmanifest", (req, res) => {
  res.sendFile(constants.MANIFEST_PATH);
});

router.get("/browserconfig.xml", (req, res) => {
  res.sendFile(constants.BROWSERCONFIG_PATH);
});

router.get("/sitemap.xml", (req, res) => {
  res.sendFile(constants.SITEMAP_PATH);
});

router.get("/favicon.ico", (req, res) => {
  res.sendFile(constants.FAVICON_PATH);
});


/**
 * Redirect http to https
 */
app.use(function (req, res, next) {
  if (req.secure) {
    next(); 
  } else if (process.env.NODE_ENV.trim() !== 'dev' && !req.secure) {
    res.redirect('https://' + req.headers.host + req.url);
  } else {
    next();
  }
});


app.use("/", router);

app.use(express.static("routes"));


/**
 * Show 404
 */
app.use(function (req, res, next) {
    res.sendFile(path.join(constants.VIEWS_PATH + "404.html"));
});

app.listen(constants.PORT, () => {
});
