const  mongoose  = require("mongoose");


const connectDB =  async() =>{
    try {
       await mongoose.connect("mongodb+srv://khadija:123456k@cluster0.zrmrg.mongodb.net/ContactList?retryWrites=true&w=majority");
       console.log("DB  connected");
    } catch (error) {

        console.log(error);
        
    }


}
module.exports=connectDB;