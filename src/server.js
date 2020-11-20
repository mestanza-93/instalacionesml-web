const express = require('express');
const app = express();
const path = require('path');
const constants = require('./constants');

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'home.html'));
});

router.get('/services', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'services.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(constants.VIEWS_PATH + 'contact.html'));
}); 


app.use(express.static(__dirname + '/assets/'));
app.use('/', router);

app.listen(constants.PORT, () => {
    console.log(`Server listening on port ${constants.PORT}`);
});




