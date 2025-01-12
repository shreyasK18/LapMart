import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../../actions/cart';

const RemoveItemConfirm = ({name,setModal,modal,id}) => {
    const dispatch=useDispatch()
    const removeItem= ()=>{
        setModal(!modal);
      dispatch(removeItemFromCart(id));
       window.location.reload();
    }
    
    return (
        
       
        <div className="add-modal fade-in" id="add-modal">
            <div className="modal-overlay">
                </div>
                <div className="modal-dialog w-75 slide-in" id="add-dialog">
                    <div className="modal-content">
                        <div className="close-button pointer"  >
                            <i className="fa fa-times-circle text-secondary"></i>
                            </div>
                            <div className="modal-header modal-text pb-0">
                                <div>
                                    <h4 className="pb-2">Are Your Sure?</h4>
                                        <p><span className="text-muted">{name}</span> will be removed from the cart.</p>
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap add-body">
                                <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                                    <button type="button" className="btn btn-secondary btn-block close-modal mb-2" onClick={()=>removeItem() }>Yes</button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                                    <Link to={'/cart'} className="btn btn-primary btn-block close-modal" style={{textDecoration:'none'}} onClick={()=>setModal(!modal)} >Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
       
    )
}



export default RemoveItemConfirm
