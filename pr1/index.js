const express =  require('express')
const app = express()

const PORT = 3000

// router
app.get('/', (req, res) => {
    return res.send('Express Handlebars')
});

app.get('/home', (req, res) => {
    return res.send('A app.get route has been generated')
});

app.listen(PORT, () => `Example app listening at http://localhost:${PORT}`)
