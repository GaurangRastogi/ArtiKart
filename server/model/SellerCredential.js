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
const SellerCredential=mongoose.model('SellerCredential',schema,'SellerCredential');
module.exports=SellerCredential;