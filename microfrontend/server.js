const express = require('express');
const cheerio = require('cheerio');
require('dotenv').config();

const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('*', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    const vm = req.query.vm ? JSON.parse(req.query.vm) : {};

    if (req.headers.accept !== 'application/json') {
        res.render('index', Object.assign({}, process.env, vm));
    } else {
        res.render('index', Object.assign({}, process.env, vm), (error, html) => {
            const $ = cheerio.load(`<div>${html}</div>`);
            const code = $('script').not('[src]').map(function () {
                return $(this).html();
            }).get().join();
            const scripts = $('script[src]').map(function () {
                return $(this).attr('src');
            }).get();
            $('script').remove();
            html = $('body > div').html();
            res.json({
                html,
                code,
                scripts
            });
        });
    }

});

app.listen(3000, () => {
    console.log(`Serving microfrontend at ${process.env.URL}`);
    console.log(`Serving microfrontend at ${process.env.URL}/?vm=%7B%22username%22%3A%22John%20Doe%22%7D`)
});
