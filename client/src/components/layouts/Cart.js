import React,{ Fragment, useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCart} from '../../actions/cart';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import RemoveItemConfirm from '../Utilities/Modals/RemoveItemConfirm';
import currencyFormatter  from '../../utilities/currencyFormatter';
import CartEmpty from './CartEmpty';
const Cart = ({ cart:{totalPrice,itemdetails,count,_id,items },getCart}) => {
    useEffect(() => {
        getCart(_id);
     },[items
    ])
    const [removeButtonState,setRemoveButtonState]=useState(false);
    const [itemData,setItemData]=useState({
        name:'',
        id:''
    });
    const getQuantity=(id)=>{
        const item = items.filter(item=>item.item===id);
        return item[0].count;
    }

    const removeItem=(id,name)=>{
        setItemData({name,id});
        setRemoveButtonState(!removeButtonState);
    }
    const {name,id}=itemData;

    
   
    return itemdetails!==null && count!==0 ?(
        <section>
            { removeButtonState && <RemoveItemConfirm name={name} id={id}  modal={removeButtonState} setModal={setRemoveButtonState}/> }

            <div className="container py-5 px-0 fade-in">
                <div className="container">
                    <div className="d-inline-block pb-3 pointer bg-green">
                    <Link to='/' className="btn" style={{textDecoration:'none'}}><i className="fa fa-arrow-left pr-2"></i>Back to Store</Link>
                        
                    </div>
                <div>
                    <h3 className="p-2">My Cart</h3>
                    <div className="p-3">
                
                        <div className="container px-4 border rounded-lg shadow">
                            {itemdetails && itemdetails.map(item=><Fragment>
                                <div className="row ">
                                    <div className="col-sm-4 col-md-4 col-lg-4 p-4 text-center">
                                        <img src={process.env.PUBLIC_URL + `/img/${item.image}`} alt={item.image} className="fit p-2"/>
                                    </div>
                                    <div className="col-sm-8 col-md-8 col-lg-8 d-flex align-items-center summary py-4">
                                        <div className="cart-item-text">
                                            <h5>{item.name}</h5>
                                            <h6>Quantity: {getQuantity(item._id)}</h6>
                                            <h6 className="text-muted">{currencyFormatter(item.price)}</h6>
                                            <p>{item.title}</p>
                                            <div className="text-muted remove-item pointer btn btn-danger p-1" onClick={()=>removeItem(item._id,item.name)}>
                                                <span className="text-white"><i className="fa fa-times text-white "></i> Remove Item</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>)}
                         </div>
                    </div>
                </div>
           
                <div className="container d-flex justify-content-between align-items-center px-0">
                    <div>
                        <h5 classname="p-3">Cart Total: <span className="text-secondary">{currencyFormatter(totalPrice)}</span></h5>
                    </div>
                    <div>
                        <Link to={`/checkout/${_id}`} className="btn btn-primary" style={{textDecoration:'none'}}>Checkout</Link>
                    </div>
                </div>
                </div>
            </div>
    </section>
    ):( count===0 ? (<CartEmpty/>)  :  (<Spinner/>))
}

Cart.propTypes = {
    cart:PropTypes.object.isRequired,
    getCart:PropTypes.func.isRequired,
    currencyFormatter:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    cart:state.cart
    
});
export default connect(mapStateToProps,{getCart})(Cart)
