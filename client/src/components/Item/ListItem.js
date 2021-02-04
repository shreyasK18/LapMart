import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

const ListItem = ({item:{category,image,name,price,_id}}) => {
 
        return (
            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 my-3">
           <Link to={`/item/${_id}`} style={{textDecoration:'none',color:'black'}}>
                    
           
        <div className="card">
            <img src={process.env.PUBLIC_URL + `img/${image}`} alt={image} className="card-img-top px-5 py-4"/>
            <div className="card-body">
                <p className="card-title font-weight-bold">{name}
                </p>
    <p className="card-text">Rs. {price}</p>
                
            </div>
        </div>
    
           </Link>
           </div>
        
        
    
    )
 } 



ListItem.propTypes = {
    item:PropTypes.object.isRequired
}

export default ListItem
