const mongoose = require('mongoose');

// Create  a model Schema
const ItemSchema=mongoose.Schema({
 
    
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
   
    category:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
    
    
});
// Create A model and export it
module.exports= Item = mongoose.model('items',ItemSchema);