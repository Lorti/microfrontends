const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('*', function (req, res) {
    const vm = req.query.vm ? JSON.parse(req.query.vm) : {};
    res.render('header/index', Object.assign({
        baseUrl: `http://localhost:${port}`
    }, vm));
});

app.listen(port, () => {
    console.log(`Serving microfrontend at http://localhost:${port}`);
    console.log(`Serving microfrontend at http://localhost:${port}/?vm=%7B%22username%22%3A%22Manuel%22%7D`)
});
