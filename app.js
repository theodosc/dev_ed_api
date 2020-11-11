const express= require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config()
//app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
//Import routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);//everytime you see /posts in url use this postsRoute with the code from posts.js
//app.use('/user',userRoute); we can also create a user Route

//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home');
})

//Connect to DB
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true},()=>
console.log('connected to db!'));
//How to start listening to the server
app.listen(3000);