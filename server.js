const websiteOperationPort = 8080;

const express = require('express');
const app = express();
const bp = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

var ledstatus = 'off';

app.get('/', (request, response) => {
    response.render('view.ejs');
});

app.get('/ledstatus', (request, response) => {
    response.send(ledstatus);
});

app.get('/ledon', (request, response) => {
    ledstatus = 'on';
    response.send("LED TURNED ON");
});

app.get('/ledoff', (request, response) => {
    ledstatus = 'off';
    response.send("LED TURNED OFF");
})

app.listen(websiteOperationPort);