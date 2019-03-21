const express = require('express');
const request = require('request');

const app = express();
const port = 4000;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    request('http://localhost:3000', (error, response, body) => {
        res.render('application', {
            header: body
        });
    });
});

app.get('/:username', function (req, res) {
    const vm = {
        username: req.params.username
    };
    request(`http://localhost:3000/?vm=${encodeURIComponent(JSON.stringify(vm))}`, (error, response, body) => {
        res.render('application', {
            header: body
        });
    });
});

app.listen(port, () => {
    console.log(`Serving application at http://localhost:${port}`);
    console.log(`Serving application at http://localhost:${port}/Manuel`);
});
