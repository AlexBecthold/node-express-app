const express = require('express')
const app = express()

const hostname = '127.0.0.1'    // allows access from remote computers
const port = 3002

app.get('/', function (req, res) {
  console.log("INFO: GET function on the root '/' page")
  res.send('Welcome home!')
})

app.get('/hello', (req, res) => {
  console.log("INFO: GET function on the '/hello' page")
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  console.log("INFO: GET function on the '/big' page")
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  console.log("INFO: GET function on the '/greeting/:id' page")
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  console.log("INFO: GET function on the '/yo/:buddy' page")
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  console.log("INFO: Page not found")
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

