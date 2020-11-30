const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send("Hello from Docker - app running [first of its kind] ....")
})

app.post('/people', (req, res) =>{
    res.send("POST - hello world")
})

app.listen(3000, ()=>{
    console.log("Server started on 3000")
})
