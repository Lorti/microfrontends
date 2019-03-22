const express = require('express');
require('dotenv').config();

const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('*', function (req, res) {
    const vm = req.query.vm ? JSON.parse(req.query.vm) : {};
    res.render('index', Object.assign({}, process.env, vm));
});

app.listen(3000, () => {
    console.log(`Serving microfrontend at http://localhost:3000`);
    console.log(`Serving microfrontend at http://localhost:3000/?vm=%7B%22username%22%3A%22Manuel%22%7D`)
});
