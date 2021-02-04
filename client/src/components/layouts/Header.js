import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Header = props => {
    return (
      <header>
        
     

         
                <nav className="navbar ">
          
                  <div className="container d-flex justify-content-between align-items-center py-1">
                    <Link to={'/'} className="navbar-brand webname"><i className="fa fa-laptop logo"></i>LapMart </Link>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link to={'/cart'} className="nav-link ">0 Items <i className="fa fa-shopping-cart icon"></i></Link> 
                      </li>
                    </ul>
                  </div>
                  
              </nav>
            
    

</header>
    )
}

Header.propTypes = {

}

export default Header
