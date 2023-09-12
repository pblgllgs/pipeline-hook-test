
const express = require('express')
const app = express()
const port = 4550

app.get('/', (req, res) => {
  res.send('Hello World update trigger 2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})