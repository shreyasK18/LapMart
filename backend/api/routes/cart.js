const express=require('express');
const router=express.Router();
const { check, validationResult }=require('express-validator');
var mongoose = require('mongoose');
const Cart=require('../../models/cart');
const config=require('config');
const Item = require('../../models/item');
const { ObjectId } = require('mongodb');

// NOTE: You need to replace the  request cartid by 
//       by getting the cart id details from req.session

// @route GET api/cart
// @access public
// @desc Display all the details of the cart in the catlog

router.get('/:id',async(req,res)=>{
    const id= req.session.cartid || req.params.id;
    let cart={};
      if(id==undefined){
          return res.status(400).json({msg:"id is undefined"})
      }
    
    
    
            try {
             cart=await Cart.aggregate([
                {
                    $match:{
                      _id:new mongoose.Types.ObjectId(id)
                    }
                },
                {
                    $lookup:{
                    from: 'items',
                    localField: 'items.item',
                    foreignField: '_id',
                    as: 'itemdetails'
                    },

                    }
                
                ]);
            
            if(!cart){
                return res.status(404).json({msg:"Not Found"});
            }  
            
             if(cart[0].order_status==true){
                 return res.json({});
             } else {
                 return res.json(cart[0]); 
             }
            
        } catch (err) {
          
            return res.status(500).send('Server Error');
        }

    
});

// @route POST api/cart
// @access public
// @desc Add Cart


router.post('/',[
    check('item','Item is required').not().isEmpty(),
    check('count','count is required').not().isEmpty(),
    check('price','price is required').not().isEmpty(),
    
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
    
        return res.status(400).json({errors:errors.array()});
    }
   try {
   
    const { item,count,price}=req.body;
   
    const items=[{item:item,count:count}];
    const totalPrice=price;
    const newCart={
        items:items,
        total_price:price,
        count:count
    }
    
    const cart=new Cart(newCart);
    req.session.cartid=cart._id;
    await cart.save();
    return res.json(cart);
   } catch(err) {
       res.status(500).send('Server Error');
   }
}); 

// @route PUT api/cart/additem/:cart_id
// @access public
// @desc Update Cart
router.put('/additem/:cart_id',[
    check('item','item is required').not().isEmpty(),
    check('count','count is required').not().isEmpty(),
    check('price','price is required').not().isEmpty()
  
],async(req,res)=>{
    const cid=req.session.cartid;
    const cart_id=req.params.cart_id;
    if(cart_id){
        
        const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }
        try {
            const { item,count,price }=req.body;
        
            let cart = await Cart.findOne({_id:cart_id});
            
            if(!cart){
                return res.status(404).json({msg:"Cart not found"});
            } 
            let items=cart.items;
            
            let checkItem=items.findIndex(it => {
            
                return it.item==item;
            })
           
            if(checkItem>-1){

                cart.items[checkItem].count=cart.items[checkItem].count+count;
                
            } else{
                let cartitem={
                    item:item,
                    count:count,
                    
                }
                cart.items.unshift(cartitem);
                
               
            }
            
            cart.count=cart.count+count;
            cart.total_price=cart.total_price+(price*count);
            
            await cart.save();
            return res.json(cart);
        } catch(err) {
  
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    } else {
        return res.status(404).json({msg:"Session Expired"});
    }
    
}); 

// @route PUT api/cart/order/:cart_id
// @access public
// @desc Update Cart
router.put('/order/:cart_id',[
    check('status','status is required').not().isEmpty(),
    check('shipping_address','shipping address is required').not().isEmpty(),
    check('credit','credit is required').not().isEmpty(),
    check('name','name is required').not().isEmpty(),
    check('agreed_terms','agree_terms is required').not().isEmpty()
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
   try {
    const { status,shipping_address,credit,name,agreed_terms }=req.body;
  
    let cart = await Cart.findOne({_id:req.params.cart_id});
    if(!cart){
        return res.status(404).json({msg:"Cart not found"});
    } 
    cart.order_status=status;
    cart.shipping_address=shipping_address;
    cart.credit=credit;
    cart.name=name;
    cart.agreed_terms=agreed_terms;
    
    
   
    
    await cart.save();
    return res.json(cart);
   } catch(err) {
       console.error(err.message);
       res.status(500).send('Server Error');
   }
}); 

// @route  DELETE api/cart/removeitem/:itemId
// @access private
// @Desc   DELETE cart item by id
router.delete('/removeitem/:itemId',async(req,res)=>{
    try {
        let cart=new Cart();
        const cartid=req.session.cartid;
        const itemid=req.params.itemId;
        // Finding the cart using session
        cart= await Cart.findOne({_id:cartid});
        
       
        // Reducing the cart count by 1
        cart.count=cart.count-1;
        
        
        // Find the item based on item id
        
        const item= await Item.findOne({_id:itemid});
       
       
        // Subtracting the total price with the item price
        cart.total_price=cart.total_price-item.price;
       
        if(!cart){
            return res.status(404).json({msg:"Cart not found"});
        } 
       
        // Finding the index of item and removing the item from cart
        let index= cart.items.findIndex(item=>item.item==req.params.itemId);
         
        
        if (index !== -1) {
        let item=cart.items[index];
        if(item.count>1){
            cart.items[index].count=cart.items[index].count-1;
        } else {
            cart.items.splice(index,1);
        }
    
        } else{
            return res.status(404).json({msg:"Cart Item Not Found"});
           
        }
       
         await cart.save();
         return res.json({msg:'Cart Item Removed',id:itemid,total_price:cart.total_price});
           
        } catch (err) {      
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    
});


// @route  DELETE api/cart
// @access private
// @Desc   DELETE cart by id
router.delete('/',[
    check('cartid','cartid is required').not().isEmpty(),
],async(req,res)=>{
    try {
         const { cartid }=req.body;
         delete req.session.cartid;
         return res.json({msg:"Cart Removed"});
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    
});

module.exports=router;