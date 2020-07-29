import React, { Component } from "react";
import { Link } from 'react-router-dom';
import burger from "./Rectangle_53.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


class Deal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:1,
      amount:20,
     
    };
  }

handleClickIncre=()=>{
    
this.setState({value: this.state.value + 1});
    
this.setState({amount: this.state.amount+20});
this.setState({amount: this.state.amount+20});


  }
  
  handleClickDecre=()=>{
    if(this.state.value>0)
    {
      this.setState({value: this.state.value - 1});
      this.setState({amount: this.state.amount-20});
    }
  }
  increment=()=>{
    this.handleClickIncre();
    this.props.handleClickPIncre();
  }

  decrement=()=>{
    this.handleClickDecre();
    this.props.handleClickPDecre();
  }
  render() {
    return (
      <div className="row my-4">
      <div className="col-10">
        <div className="media">
          <img src={burger} className="mr-3 img-fluid" alt="mighty burger" />
          <div className="media-body">
            <h5
              className="mt-0"
              style={{ fontWeight: "lighter", color: "#ED1B24" }}
            >
              Big Mighty Burger
            </h5>
            <small className="text-muted ">Alaska Rsetaurant</small>
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={this.decrement}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                {this.state.value}
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={this.increment}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 text-center">
        <div>
          <p>
            <i>${this.state.amount}</i>
          </p>
        </div>
      </div>
    </div>

    );
  }
}


  
 


export default class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal:60,
      total:80,
    };
  }

  handleClickPIncre=()=>{
    
    this.setState({subtotal: this.state.subtotal + 20});
    this.setState({total: this.state.total + 20});
   
    
      }
      
      handleClickPDecre=()=>{
        if(this.state.subtotal>0)
        {
          this.setState({subtotal: this.state.subtotal - 20});
          this.setState({total: this.state.total - 20});
        }
      }

 
  
 
  render() {
    return (
      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div
            className="offset-md-4 offset-1 col-10 col-md-5 shadow-lg"
            style={{
              marginTop: "15vh",
              minHeight: "500px",
              borderRadius: "1rem",
            }}
          >
            <div
              className="alert alert-dismissible fade show mx-0"
              role="alert"
            >
              <h4
                className="alert-heading text-center"
                style={{ color: "#ED1B24" }}
              >
                <FontAwesomeIcon
                  className="mr-1"
                  style={{ color: "rgb(240, 14, 14)" }}
                  icon={faShoppingBasket}
                />
                Basket
              </h4>
              <Link to=""
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Link>

              <Deal handleClickPIncre={this.handleClickPIncre} handleClickPDecre={this.handleClickPDecre} />
              <Deal handleClickPIncre={this.handleClickPIncre} handleClickPDecre={this.handleClickPDecre} />
              <Deal handleClickPIncre={this.handleClickPIncre} handleClickPDecre={this.handleClickPDecre} />

              <div className="row " style={{ fontSize: "xx-small" }}>
                <div className="col-10 my-1">Subtotal</div>
          <div className="col-1">${this.state.subtotal}</div>
                <div className="col-10 my-1">Delvery Fee</div>
                <div className="col-1"> $20</div>
                <div className="col-10 my-1" style={{ color: " #ED1B24" }}>
                  Total
                </div>
                <div className="col-1" style={{ color: " #ED1B24" }}>
                  ${this.state.total}
                </div>
                <div className="col-10 text-center mx-5 my-3">
                  <Link
                    id=""
                    className="btn text-white"
                    style={{ backgroundColor: "#0DD6FF", fontWeight: "bolder" }}
                    to="Payment"
                    role="button"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
