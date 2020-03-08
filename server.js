const express = require('express')
const server = express()
const port = 80

server.use(express.json())
server.use(express.static('/'))

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
