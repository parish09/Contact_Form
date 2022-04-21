const express=require('express');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
//connecting to mongoDB
mongoose.connect("mongodb+srv://admin:Password123@cluster0.v6bfl.mongodb.net/Assignment",{useNewUrlParser:true},{useUnifiedTopology:true});
app.use(express.static("public"));
//Creating Schema
const infoSchema={
    email: String,
    firstName: String,
    lastName: String,
    address: String
}
//Creating Model
const Info=mongoose.model('Info',infoSchema);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
//Getting and Storing Data
app.post('/',(req,res)=>{
    const newInfo= new Info({
        email: req.body.email,
        firstName: req.body.fname,
        lastName: req.body.lname,
        address: req.body.address
    })
    newInfo.save();
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("We're Live");
})
