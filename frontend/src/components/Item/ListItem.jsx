import React from 'react';
import {Link} from 'react-router-dom';
import currencyFormatter  from '../../utilities/currencyFormatter';
const ListItem = ({item:{image,name,price,_id}}) => {
 
        return (
            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 my-3">
                <Link to={`/item/${_id}`} style={{textDecoration:'none',color:'black'}}>
                    <div className="card">
                        <img src={ `img/${image}`} alt={image} className="card-img-top px-5 py-4"/>
                        <div className="card-body">
                            <p className="card-title text-center font-weight-bold">{name}</p>
                            <p className="card-text text-center"> {currencyFormatter(price)}</p>
                        </div>
                    </div>
                </Link>
           </div>
    )
 } 



export default ListItem
