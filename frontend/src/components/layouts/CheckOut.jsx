import React,{ useState } from 'react';
import { Link,Navigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import { getCart, orderCart, removeCart } from '../../actions/cart';
import OrderdedItemsModal from '../Utilities/Modals/OrderdedItemsModal';
const CheckOut = ({cart:{_id,ordered},match,orderCart,removeCart}) => {
  const [orderedState,setOrderState]=useState(false);
  const params=useParams();
    const [formData,setFormData]=useState({
      name:'',
      shipping_address:'',
      credit:'',
      agree:false
    });
    const { name,shipping_address,credit,agree }=formData
    const onChange= (e) => setFormData({...formData,[e.target.name]:e.target.value});
    const onCheck=(e)=>setFormData({...formData,agree:e.target.checked});
   
  
    const onSubmit= async(e)=>{
    
      e.preventDefault();
      orderCart(name,credit,shipping_address,agree,_id);
      setOrderState(true);
      
     
     
       
  }
   
  if(_id==null){
    return <Navigate replace to="/" />
  } else {
    return  params.id && params.id===_id ? (
    <section>
      {orderedState && <OrderdedItemsModal state={orderedState} setState={setOrderState} id={_id}/>}
      <div className="container py-5 fade-in">
        <div className="container p-4 border rounded-lg shadow">
          <form onSubmit={e=>onSubmit(e)}>
           <div className="form-group my-3">
              <label className="my-1">Name</label>
              <input  type="text" className="form-control" name="name" value={name}  onChange={ e => onChange(e)} required/>
           </div>
          <div className="form-group my-3">
              <label className="my-1">Credit Card</label>
              <input  type="text" className="form-control" name="credit"  value={credit}  onChange={ e => onChange(e)} required/>
          </div>
          <div className="form-group my-3">
              <label className="my-1">Shipping Address</label>
              <textarea  className="form-control" name="shipping_address" rows="4"  value={shipping_address}  onChange={ e => onChange(e)} required></textarea>
          </div>
          <div className="form-check">
              <input  className="form-check-input" type="checkbox" id="accept-box"  value={agree}  onChange={ e => onCheck(e)} required/>
              <label className="form-check-label my-1" htmlFor="accept-box" >I acknowledge that this submission is for demonstrative purposes.  I understand that no real purchases and payment processing will be made.<br/>By checking this box, I understand that no real personal information such as names, addresses, and credit card numbers should not be used.</label>
          </div>
          <div className="row align-items-center justify-content-between p-3 submit-row my-5">
            <div className="col-md-6">
              <Link to='/' className="btn" style={{textDecoration:'none'}}><i className="fa fa-arrow-left pr-2"></i>Continue Shopping</Link>
            </div>
            <div className="col-md-6">
              <button type="submit" className="btn btn-primary ml-auto right"  disabled={!agree}>Place Order</button>
            </div>
          </div>
        </form>
      </div>
     </div>
   </section>
    ):  (<NotFound/>);
  }
}

CheckOut.propTypes = {
  cart:PropTypes.object.isRequired,
  getCart:PropTypes.func.isRequired,
  orderCart:PropTypes.func.isRequired,
  removeCart:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
  cart:state.cart,
  
})
export default connect(mapStateToProps,{getCart,orderCart,removeCart})(CheckOut)
