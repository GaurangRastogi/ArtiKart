const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    category:{
        type:String,
    },
    stars:{
        type:Number,
    }
})
const Product=mongoose.model('Product',schema,'Product');
module.exports=Product;