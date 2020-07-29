import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitterSquare,faInstagram,faPinterest } from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
    render() {
       let arr=[
        <FontAwesomeIcon
         style={{fontSize: "x-large", color: "rgb(187, 127, 127)"}}
        icon={faFacebook}
      />,
      <FontAwesomeIcon
      className="rounded-pill"
         style={{fontSize: "x-large", color: "rgb(187, 127, 127)"}}
        icon={faTwitterSquare}
      />,
      <FontAwesomeIcon
         style={{fontSize: "x-large", color: "rgb(187, 127, 127)"}}
        icon={faInstagram}
      />,
      <FontAwesomeIcon
         style={{fontSize: "x-large", color: "rgb(187, 127, 127)"}}
        icon={faPinterest}
      />
        
        
]   
            
        return (
            <div>
                
                 <footer>
        <div className="container mt-5 text-white">
            <div className="row">
                <div className="offset-lg-1 offset-md-2  col-lg-2 col-md-4 col-12 mt-5">
                    <h1>snaxa</h1>
                    <div>
                        {

                            arr.map((value,i)=>(
                            <Link name="" id="" className="text-decoration-none  text-center" to="App" style={{fontSize: "x-large", color: "rgb(187, 127, 127)"}} key={i}> {value}</Link>   
                            ))
                        }
      
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12 my-5">
    
                    <h6>Estd. 2019</h6>
                    <p>It is a long established fact that a reader willbe distracted by the readable content of apage when looking for its layout.</p>
                    <p>T   022 4455 5566</p>
                    <p>@   snaxa@anything.com</p>
                </div>
    <div className="offset-md-2 col-lg-4 col-md-8 col-12 my-5">
    <i className="fa fa-envelope" aria-hidden="true">
    Stay up to date on the latest fron Snaxa
    </i>
    <div className="form-group">
      <label htmlFor="email">EMail</label>
      <input type="email" className="form-control" name="emial" id="" aria-describedby="emailHelpId" placeholder="Enter your e-mail Address"/>
     
    
      <Link to="EmailSent" className="btn btn-primary px-5 py-2 mt-5 text-danger bg-white border-0 text-center rounded " role="button" aria-pressed="true">send</Link>
    </div>
                    
                </div>
            </div>
        </div>
        <hr width="75%"/>
        <div className="container">
            
        
                <div className="d-flex justify-content-around">
                    <div className="p-2">
                        <Link to="" className="text-decoration-none text-white"  aria-pressed="true">Home</Link>
                    </div>
                    <div className="p-2">
                        <Link to="All_Restaurants" className="text-decoration-none text-white"  aria-pressed="true">Restaurants</Link>
                    </div>
                    <div className="p-2">
                        <Link to="Payment" className="text-decoration-none text-white"  aria-pressed="true">MY orders</Link>
                    </div>
                    <div className="p-2">
                        <Link to="Res_Details" className="text-decoration-none text-white"  aria-pressed="true">Ramadan Deals</Link>
                    </div>
                    <div className="p-2">
                        <Link to="All_Restaurants" className="text-decoration-none text-white"  aria-pressed="true">Offers</Link>
                    </div>
                </div>
          
        </div>
    </footer>

            </div>
        )
    }
}
