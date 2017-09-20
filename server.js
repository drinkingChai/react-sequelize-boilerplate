const express = require('express')
const path = require('path')
const db = require('./db')

const app = express()

// middleware
app.use(require('body-parser').json())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))

// routes
app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'browser/index.html'))
})

// api routes here or refactor
// app.get('/api/test' ...

// listen
const port = process.env.PORT || 3000

db.sync()
.then(db.seed)
.then(()=> {
  app.listen(port, ()=> console.log(`listening on port ${port}`))
})
