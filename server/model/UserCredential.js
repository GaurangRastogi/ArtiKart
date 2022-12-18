const mongoose=require('mongoose');


var schema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})
const UserCredential=mongoose.model('UserCredential',schema,'UserCredential');
module.exports=UserCredential;