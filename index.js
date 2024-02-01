require('dotenv').config()
const express = require('express')
const app = express()
const port=process.env.port;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter')
})
app.get('/google',(req,res)=>{
    res.send('google')
})
app.get('/Afroj',(req,res)=>{
    res.send('<h1>Afrojack</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})