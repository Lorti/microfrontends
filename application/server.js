const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    axios.get('http://localhost:3000')
        .then(response => {
            res.render('index', {
                header: response.data
            });
        });
});

app.get(/single-page-application/, function (req, res) {
  res.render('single-page-application');
});

app.get('/:username', function (req, res) {
    const vm = {
        username: req.params.username
    };
    axios.get(`http://localhost:3000/?vm=${encodeURIComponent(JSON.stringify(vm))}`)
        .then(response => {
            res.render('index', {
                header: response.data
            });
        });
});

app.listen(4000, () => {
    console.log(`Serving application at http://localhost:4000`);
    console.log(`Serving application at http://localhost:4000/John%20Doe`);
});
