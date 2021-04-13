const express =  require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')
const app = express()
const PORT = 3000

app.use(morgan('combined'))


// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// router
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/news', (req, res) => {
    res.render('news')
});

app.listen(PORT, () => `Example app listening at http://localhost:${PORT}`)
