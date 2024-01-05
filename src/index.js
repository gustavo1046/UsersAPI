const express = require('express');
const mongoose = require('mongoose');


const app = express()
app.use(express.json())
const port = 3000


app.get('/', (res,req)=>{
    res.send("Hello world");
})

const User = mongoose.model('User', {
    Name: String,
    Email: String,
    Password: String,
    Birth: Date
})

app.post("/", async (req, res) =>{
    const user = new User({
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Birth: req.body.Birth
    })

    await user.save()
    res.send(user)
})



app.listen(port, ()=>{
    mongoose.connect('mongodb+srv://songustavo17:937GoRtTFlbxQTCs@usersapi.0juhwku.mongodb.net/?retryWrites=true&w=majority')
    console.log("App running")
})