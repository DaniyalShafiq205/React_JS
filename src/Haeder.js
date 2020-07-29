import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './ItemDetail/Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faShoppingCart ,faUser} from "@fortawesome/free-solid-svg-icons";
export default class Haeder extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" id="Mainnavbar">
      <div className="navbar-brand" id="navbarBrand" href="#">
      
       
<Link to="">

          <img src={logo} alt=""/>
</Link>

       
      </div>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
       <FontAwesomeIcon
      className="mr-1"
      style={{ color: "rgb(240, 14, 14)" }}
      icon={faBars}
    />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link  className="nav-link" to="All_Restaurants"
              >Restaurants <span className="sr-only">(current)</span>
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Basket">My Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Res_Details">Ramadan Deals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="All_Restaurants">Offers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="EmailSent">Become a Partner</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Basket"
              ><FontAwesomeIcon
              className="mr-1"
              style={{ color: "rgb(240, 14, 14)" }}
              icon={faUser}
            /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Save"
              ><FontAwesomeIcon
              className="mr-1"
              style={{ color: "rgb(240, 14, 14)" }}
              icon={faShoppingCart}
            /></Link>
          </li>
        </ul>
      </div>
    </nav>

            </div>
        )
    }
}
