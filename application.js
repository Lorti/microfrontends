const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    axios.get('http://localhost:3000')
        .then(response => {
            res.render('application/index', {
                header: response.data
            });
        });
});

app.get('/:username', function (req, res) {
    const vm = {
        username: req.params.username
    };
    axios.get(`http://localhost:3000/?vm=${encodeURIComponent(JSON.stringify(vm))}`)
        .then(response => {
            res.render('application/index', {
                header: response.data
            });
        });
});

app.listen(port, () => {
    console.log(`Serving application at http://localhost:${port}`);
    console.log(`Serving application at http://localhost:${port}/John%20Doe`);
});
