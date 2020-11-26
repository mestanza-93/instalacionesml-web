const express = require('express');
const app = express();
const path = require('path');
const constants = require('./constants');

const router = express.Router();


// NODE MODULES
app.use('/bootstrap_css', express.static(path.join(constants.BOOTSTRAP_CSS)));
app.use('/bootstrap_js', express.static(path.join(constants.BOOTSTRAP_JS)));
app.use('/jquery', express.static(path.join(constants.JQUERY)));


// ASSETS 
app.use('/assets', express.static(constants.ASSETS_PATH));

// CSS 
app.use('/css', express.static(constants.CSS_PATH));

// VIEWS
app.use('/views', express.static(constants.VIEWS_PATH));


// ROUTER
router.get('/', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'home.html'));
});

router.get('/base', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'base.html'));
});

router.get('/servicios', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'services.html'));
});

router.get('/productos', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'products.html'));
}); 

router.get('/contacto', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'contact.html'));
}); 

router.get('/instalaciones-placas-solares', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'solar-panels.html'));
}); 

router.get('/reparaciones-placas-solares', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'solar-panels.html'));
}); 

router.get('/mantemimiento', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'maintenance.html'));
}); 

app.use('/', router);



app.listen(constants.PORT, () => {
    console.log(`Server listening on port ${constants.PORT}`);
});




