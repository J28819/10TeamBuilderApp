const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 8080

const path = require('path')
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/json', express.static(path.join(__dirname, 'public/json')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))


app.get('/', (req, res) => {
  res.sendFile(index.html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})