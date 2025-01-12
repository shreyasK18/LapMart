import React from 'react';
import { Link } from 'react-router-dom';
const Footer = props => {
    return (
        <footer>
       <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                        <Link to={'/'}><i className="fa fa-laptop" style={iconStyle} ></i></Link><p className="webname">LapMart</p> 
                </div>
            </div>
        </div>
    </footer>
    )
}


const iconStyle={
    fontSize:'32px'
}

export default Footer
