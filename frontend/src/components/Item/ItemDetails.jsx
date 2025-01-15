import React,{ useEffect,useState } from 'react';
import { useNavigate,Link,useParams  } from 'react-router-dom';
import { getItem } from '../../actions/items';
import Spinner from '../layouts/Spinner';
import AddItemModal from '../Utilities/Modals/AddItemModal';
import { addItemToCart,addCart } from '../../actions/cart';
import currencyFormatter  from '../../utilities/currencyFormatter';
import { useDispatch, useSelector } from 'react-redux';


const ItemDetails = ()=> {
    const [addButtonState,setAddButtonState]=useState(false);
    const {id} = useParams();
    const [scrollUp,setScrollUp]=useState(false);
    const dispatch=useDispatch();
    const cart=useSelector(state=> state.cart);
    const items=useSelector(state=>state.items)
     const { item,error,loading}=items;
     const {_id}=cart;
    const history=useNavigate();

    const addToCart = () =>{
        setAddButtonState(!addButtonState);
        if(_id!==null && _id!==undefined){
        
            dispatch(addItemToCart(_id,item._id,item.price));
        } else {

            dispatch(addCart(item._id,item.price));
        }
   
    }
    
        
        
    
    useEffect(()=>{
        dispatch(getItem(id));
    },[id])

   

    if (item!==null && loading===false)  {
        if(scrollUp===false){
            window.scrollTo(0,0);
            setScrollUp(true);
        }
        
        return (
        <section>
            { addButtonState && <AddItemModal name={item.name} id={item._id} setState={setAddButtonState}  state={addButtonState}/> }
            <div className="container py-5 fade-in">
                <div className="container p-4 border rounded-lg shadow">
                    <div className="d-inline-block pb-3 pointer d-">
                         <Link to='/' className="btn" style={{textDecoration:'none'}}><i className="fa fa-arrow-left pr-2"></i>Back to Store</Link>
                    </div>
                    <div className="row pb-3">
                        <div className="col-xl-5 col-lg-12 px-3 pb-3 text-center">
                            <img src={ `/img/${item.image}`} alt={item.image} className="fit"/>
                        </div>
                        <div className="col-lg-7 pb-3 d-flex align-items-center">
                            <div className="details-text"><h5>{item.name}</h5><h6 className="text-muted">{currencyFormatter(item.price)}</h6>
                                <button type="button" className="btn btn-primary"  onClick={() => addToCart()}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="long-description">
                        <h5>Description</h5>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </section>
    ) }
    else if(error.status!==400 || loading!==false) {
            return <Spinner/>;
    }  else {
            
          history.push('/pagenotfound');
          return <Spinner/>;
       
    }
    
}

// ItemDetails.propTypes = {
//   addItemToCart:PropTypes.func.isRequired,
//   addCart:PropTypes.func.isRequired,
// //   getItems:PropTypes.func.isRequired,
//   items:PropTypes.object.isRequired,
//   currencyFormatter:PropTypes.func.isRequired,
// }
// const mapStateToProps= state =>({
//     items:state.items,
//     cart:state.cart
// });
export default ItemDetails
