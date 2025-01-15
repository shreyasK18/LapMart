import React,{ Fragment, useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { getCart} from '../../actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import RemoveItemConfirm from '../Utilities/Modals/RemoveItemConfirm';
import currencyFormatter  from '../../utilities/currencyFormatter';
import CartEmpty from './CartEmpty';
const Cart = () => {
    const dispatch=useDispatch();
   
    const cart=useSelector((state)=>state.cart)
    const {totalPrice,itemdetails,count,_id,items}=cart;
    
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
    useEffect(() => {
       
        dispatch(getCart(_id));
        
        
     },[
    ])
    
   
     if(itemdetails!==null && count!==0) return (
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
                            { itemdetails?.map((item)=><Fragment key={item._id}>
                                <div className="row ">
                                    <div className="col-sm-4 col-md-4 col-lg-4 p-4 text-center">
                                        <img src={ `/img/${item.image}`} alt={item.image} className="fit p-2"/>
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
                        <h5 className="p-3">Cart Total: <span className="text-secondary">{currencyFormatter(totalPrice)}</span></h5>
                    </div>
                    <div>
                        <Link to={`/checkout/${_id}`} className="btn btn-primary" style={{textDecoration:'none'}}>Checkout</Link>
                    </div>
                </div>
                </div>
            </div>
    </section>)
    else if(count===0)  { return <CartEmpty/>  }
    else { return <Spinner/>}
    
}

export default Cart
