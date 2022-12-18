const mongoose=require('mongoose');


var schema=new mongoose.Schema({
    userId:{
        type:String,
    },

    cart:{
        type:String,
    },

    feedBack:{
        type:String,
    },
    quantity:{
        type:Number
    }
})
const User=mongoose.model('User',schema,'User');
module.exports=User;