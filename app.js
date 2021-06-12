const express = require('express')

const exphbs = require('express-handlebars')

const farmList = require('./farmList.json')

const port = 3000

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index', { farms: farmList })
})


app.listen(port, () => {
  console.log(`express is running on http://localhost/${port}`)
})

