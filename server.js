const express = require('express')


const app=express();


require('dotenv').config();

const connectDB =require('./config/connectDB');
const User = require('./models/contact');
app.use(express.json());
connectDB();
app.use('/contact',require("./routes/contact"));
app.use('/product',require("./routes/product"));
//app.post('/add', async (req, res) =>{
 //  try {
 //let newContact=new Contact({...req.body});
//let result = await newContact.save();
 //res.send({ contact:result, msg:'succesfully added'});
  // } catch(error){
   //  console.log(error);
   //  res.send({msg:"be carreful"});

  // }
//});
  
  app.listen(process.env.PORT, (err) => {
    err
      ? console.log(err)
      : console.log(`server is running... ${process.env.PORT}`);
  });
