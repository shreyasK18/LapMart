import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Header = () => {
  const count=useSelector(state=>state.cart.count)
    return (
      <header>
        <nav className="navbar ">
          <div className="container d-flex justify-content-between align-items-center py-1">
              <Link to={'/'} className="navbar-brand webname"><i className="fa fa-laptop logo"></i>LapMart </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={'/cart'} className="nav-link ">{count <= 1 ? (<span>{count} Item</span>):(<span>{count} Items</span>)} <i className="fa fa-shopping-cart icon"></i></Link> 
                </li>
              </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header;
