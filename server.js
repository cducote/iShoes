const express = require('express')
const app = express()
const logger = require('morgan')
const methodOverride = require('method-override')
const routes = require('./routes/index.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger('dev'))

app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})