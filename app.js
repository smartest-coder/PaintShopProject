const path = require('path')
const express = require('express')
const app = express()
const port = 3000



app.use(express.static('./public'))





app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'view','index.html'))
})
app.get('/visualiser', (req, res) => {
  res.sendFile(path.join(__dirname,'view','visualiser.html'))
})
app.get('/colorpicker', (req, res) => {
  res.sendFile(path.join(__dirname,'view','colorpicker.html'))
})














app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
