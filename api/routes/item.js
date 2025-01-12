const express=require('express');
const router=express.Router();
const Item=require('../../models/item');
const config=require('config');


// @route GET api/item
// @access public
// @desc Display all the details of the items in the catlog

router.get('/',async(req,res)=>{
    try {
        
        const { category } =req.body;
        let items={};
        if(category){
             items=await Item.find({category:category});
        } else {
             items=await Item.find();
        }
      
        
        if(items.length==0){
            return res.status(400).json({msg:"Items Not Found"});
          
        } else{
            
           return res.json(items);
          
        }
        
    } catch (err) {
        return res.status(500).send('Server Error');
    }
});


// @route GET api/item/:id
// @access public
// @desc will query based on their id

router.get('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const item=await Item.findOne({_id:id});
        return res.json(item);
    } catch (err) {
        if(err.kind==='ObjectId'){
            return res.status(400).json({msg:"Item Not Found"});
        } 
        res.status(500).send('Server Error');
        
    }
});


module.exports=router;