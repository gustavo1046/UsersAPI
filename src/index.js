const express = require('express');
const app = express()
const port = 300

app.get('/', (res,req)=>{
    res.send("Hello world");
})

app.listen(port, ()=>{
    console.log("App running")
})