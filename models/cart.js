const mongoose = require('mongoose');

// Create  a model Schema
const CartSchema=mongoose.Schema({
    items:[
        {
            item:{
                type:mongoose.Schema.Types.ObjectId,
                required:true
            },
            count:{
                type:Number,
                default:0
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    },
    order_status:{
        type:Boolean,
        default:false 
    },
    total_price:{
        type:Number,
        default:0.00
    },
    count:{
        type:Number,
        default:0
    },
    shipping_address:{
        type:String
    },
    name:{
        type:String
    },
    credit:{
        type:String
    },
    agreed_terms:{
        type:Boolean,
        default:false
    }
});
// Create A model and export it
module.exports= Cart = mongoose.model('carts',CartSchema);