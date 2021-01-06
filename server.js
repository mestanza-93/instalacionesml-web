const express = require('express');
const app = express();
const path = require('path');
const constants = require('./constants');

const router = express.Router();


// NODE MODULES
app.use('/bootstrap-css', express.static(path.join(constants.BOOTSTRAP_CSS)));
app.use('/bootstrap-js', express.static(path.join(constants.BOOTSTRAP_JS)));
app.use('/jquery', express.static(path.join(constants.JQUERY)));
app.use('/icons', express.static(path.join(constants.ICONS_CSS)));


// ASSETS 
app.use('/assets', express.static(constants.ASSETS_PATH));

// CSS 
app.use('/css', express.static(constants.CSS_PATH));

// VIEWS
app.use('/views', express.static(constants.VIEWS_PATH));

// JS
app.use('/js', express.static(constants.JS_PATH));


// ROUTER
router.get('/', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'home.html'));
});

router.get('/placas-solares-malaga', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'home.html'));
});

router.get('/base', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'base.html'));
});

router.get('/productos', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'products.html'));
}); 

router.get('/instalaciones-placas-solares', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'installations.html'));
}); 

router.get('/reparaciones-placas-solares', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'maintenance.html'));
}); 

router.get('/aviso-legal', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'legal.html'));
}); 

app.use('/', router);



app.listen(constants.PORT, () => {
    console.log(`Server listening on port ${constants.PORT}`);
});




