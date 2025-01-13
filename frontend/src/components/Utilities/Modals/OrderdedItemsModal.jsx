import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCart } from '../../../actions/cart';

const OrderdedItemsModal = ({setState,state,id}) => {
   const dispatch=useDispatch();
    const redirect =() =>{
       
      
        dispatch(removeCart(id));
        
    }
    const closeBtn=()=>{
        setState(!state);
       redirect();
    }
   
    return (
        <div className="add-modal fade-in" id="add-modal">
            <div className="modal-overlay">
                </div>
                <div className="modal-dialog w-75 slide-in" id="add-dialog">
                    <div className="modal-content">
                        <div className="close-button pointer" onClick={() => closeBtn()} >
                            <i className="fa fa-times-circle text-secondary"></i>
                            </div>
                            <div className="modal-header modal-text pb-0 ">
                                <div>
                                    <h4 className="pb-2 center">Thank You!</h4>
                                    <p>Your Items has been ordered</p>
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap add-body">
                                <div className="col-sm-12 col-md-12 col-lg-12 modal-button">
                                    <button type="button" className="btn btn-secondary btn-block close-modal " onClick={()=>   redirect()}>Continue shopping with new cart</button>
                                </div>
                               
                             </div>
                            </div>
                        </div>
                    </div>
    )
}



export default OrderdedItemsModal
