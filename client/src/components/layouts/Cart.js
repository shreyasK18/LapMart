import React from 'react'
import PropTypes from 'prop-types'
import { removeItemFromCart} from '../../actions/cart';
import { connect } from 'react-redux';
const Cart = ({ removeItemFromCart,cart:{cart} }) => {
    const totalPrice=(items)=>{
        let sum=0;
        
        sum=items.reduce(function(tot, arr) { 
            // return the sum with previous value
            return tot + parseInt(arr.price.replace(/,/g, ""));
          
            // set initial value as 0
          },0);
        return sum;
    }
    let sum=totalPrice(cart);
    return (
        <div>
           <h1>{sum}</h1> 
        </div>
    )
}

Cart.propTypes = {
    cart:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    cart:state.cart
});
export default connect(mapStateToProps,{removeItemFromCart})(Cart)
