const express = require('express')

const app = express()
app.get('/', (req, res) =>{
    res.send("GET - hello world")
})

app.post('/', (req, res) =>{
    res.send("POST - hello world")
})

app.listen('8080', ()=>{
    console.log("Server listening on 8080")
})