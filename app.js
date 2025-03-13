const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port || 8080

app.get('/', (req, res) => res.status(200).send('The API TSA laboratory API is working🎉'))
app.listen(port, ()=> console.log(`The server listen at http://localhost:${port}`))