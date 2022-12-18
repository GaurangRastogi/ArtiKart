const mongoose=require('mongoose');


var schema=new mongoose.Schema({
    sellerId:{
        type:String,
    },

    myProduct:{
        type:String,
    },
    quantity:Number,
    soldQuantity:Number
})
const Seller=mongoose.model('Seller',schema,'Seller');
module.exports=Seller;