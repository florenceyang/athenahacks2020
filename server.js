const express = require('express')
const server = express()
const port = 80

server.use(express.static(__dirname))

server.get("/", (req, res) => {
  res.send('Loading website!');
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
