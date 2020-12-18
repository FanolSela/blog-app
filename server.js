const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.send('Blog Post')
})

app.listen(3000)