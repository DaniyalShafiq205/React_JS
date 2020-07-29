import React, { Component } from "react";
import "./Payment.css";
import masterCard from "./masterCard.png";
import cash from './cash.png';
import Haeder from "../../Haeder";
import Footer from "../../Footer";


export default class Payment extends Component {
    render() {
        return (
            <div>
               <Haeder /> 
    <div className="container mt-5">
      
      <div className="row ">
        <div className="col-md-7 col-12">

       
        <div className=" border rounded py-5 shadow-lg mb-5 px-5">
          <h3 style={{color: '#ED1B24'}}>. Payment Method</h3>
          <div>
            <img className="mx-2 border px-5" src={masterCard} style={{maxHeight: '250px', maxWidth: '250px'}} alt="" srcset=""/>
            <img className="mx-2 border px-5" src={cash} style={{maxHeight: '250px', maxWidth: '250px'}} alt="" srcset=""/>
          </div>
          <h4 className="my-5">
            Card Details
          </h4>
          <form action="../../App.js">
            <div className="row">
              <div className="col-8">
                <input type="text" className="form-control" placeholder="Card number"/>
              </div>
              <div className="col-4">
                <input type="text" className="form-control" placeholder="Cvc"/>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-4">
                <input type="text" className="form-control" placeholder="MM/YYYY"/>
              </div>
            </div>
            <p style={{fontSize: 'smaller'}}>. enter your card details so that you place order the ammount will be deducted from your account</p>
            <div className="text-center">

              <button type="submit" className="btn text-white btn-primary my-5" style={{backgroundColor: '#0DD6FF',fontWeight: 'bolder', padding: '0.5rem 6rem'}}>Save</button>
            </div>
          </form>


        </div>

        <div className=" border rounded py-5 shadow-lg my-5 px-5">
          <h3 style={{color: '#ED1B24'}}>Delivery Details</h3>
          
          <form action="/" exact>
            <div className="row  my-4">
              <div className="col">
                <input type="text" className="form-control" placeholder="Address 1"/>
              </div>
            </div>
              <div className="row  my-4">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Address 2"/>
                </div>
              </div>
              
           
            <div className="row my-4">
              <div className="col">
                <input type="text" className="form-control" placeholder="Phone Number"/>
              </div>
            </div>
            <p className="ml-3 mr-5" style={{fontSize: 'smaller'}}>Your order will be Deliver to you at the above mentioned address and the rider will call you on your given number in case of any kind of problem</p>
            <div className="text-center">

              <button type="submit" style={{backgroundColor:' #0DD6FF',fontWeight: 'bolder' ,padding: '0.5rem 6rem'}} className="btn btn-primary btn-block text-white my-5" >Place Order</button>
            </div>
          </form>

          
        </div>

      </div>
        <div className="offset-md-1 col-12 col-md-3">
         <div className="row">
           <div className="col-8">
              <h6>Big Mighty Burger</h6>
              <small>Alaska Restaurant</small>
           </div>
           <div className="col-4">
                    <i>
                      $20
                    </i>
           </div>
           <div className="col-8 mt-3">
           
            <small>Subtotal</small>
         </div>
         <div className="col-4 mt-3">
                  <i>
                    $60
                  </i>
         </div>
         <div className="col-8">
         
          <small>Delivery Fee</small>
       </div>
       <div className="col-4">
                <i>
                  $20
                </i>
       </div>
       <div className="col-8 mt-2 " style={{color: '#ED1B24'}}>
        
        <small>Total</small>
     </div>
     <div className="col-4 mt-2" style={{color: '#ED1B24'}}>
              <i>
                $80
              </i>
     </div>
         </div>
          </div>
        </div>
      </div>
    


               <Footer /> 
            </div>
        )
    }
}
