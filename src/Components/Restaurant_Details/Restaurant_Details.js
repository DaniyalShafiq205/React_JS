import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MgBurger from "./MightyBrger.png" ;
import Alaska from "./AlaskaMenu.png" ;
import "./Restaurant_Details.css";
import Haeder from "../../Haeder";
import Footer from "../../Footer";



function Grid() {
    return (
        <li class="list-group-item"><div class="row">
        <div class="col-8">
         <div class="media">
             <img src={MgBurger}class="mr-3"  alt="mighty burger"/>
             <div class="media-body">
               <h5 class="mt-0" style={{color: '#ED1B24'}}>Big Mighty Burger</h5>
               <small class="text-muted ">
                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
               </small>
             </div>
           </div>
        </div>
        <div class="col-4 text-center">
            <div>
                <p><i>$20</i></p>
                <Link to="Basket">
                    <img src={Alaska} style={{maxWidth: '10vw'}} alt=""/>
                </Link>
            </div>
        </div>
     </div></li>
    )
}



function Items() {
  return (
    <li class="list-group-item"><div class="row">
                          <div class="col-10">
                           <div class="media">
                               <img src={MgBurger} class="mr-3"  alt="mighty burger"/>
                               <div class="media-body">
                                 <h5 class="mt-0" style={{color: '#ED1B24'}}>Big Mighty Burger</h5>
                                 <small class="text-muted ">
                                   Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
                                 </small>
                               </div>
                             </div>
                          </div>
                          <div class="col-2 text-center">
                              <div>
                                  <p><i>$20</i></p>
                                  
                              </div>
                          </div>
                       </div></li>
  )
}



export default class Restaurant_Details extends Component {
  render() {
    return (
      <div>
        <Haeder />

        <div class="text-white bg"></div>
        <div class="container" style={{marginTop: '-35rem'}}>
      <div class="row">
        <div class="offset-md-1 col-9 col-md-7">
          <div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-sm px-3 border btn-danger">
                Description
              </button>
              <button type="button" class="btn btn-sm px-3 border">
                Reviews
              </button>
            </div>
          </div>
          <div class="mt-5">
            <small class="mt-5 d-block">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ducimus nisi commodi molestiae necessitatibus, at
                eveniet omnis cupiditate quam iste eos laborum et tenetur odit,
                dolorum ratione sunt placeat sit delectus similique, quidem
                iusto aperiam? Fuga, nam. Incidunt sunt perspiciatis nemo
        
              </b>
            </small>
            <small >
              <b class="mt-3 d-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ducimus nisi commodi molestiae necessitatibus, at
                eveniet omnis cupiditate quam iste eos laborum et tenetur odit,
                dolorum ratione sunt placeat sit delectus similique, quidem
                iusto aperiam? Fuga, nam. Incidunt sunt perspiciatis nemo
                exercitationem et sed eum, vitae voluptatum officia debitis ad
              </b>
            </small>
          </div>


          <h1>Alsaka Menu</h1>
          <ul class="list-group my-2">
            
            <li class="list-group-item list-group-item-secondary">
                
                <div class="row">
           <h3>Fast food</h3>
            </div>
        </li>

            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            

            
            
            
          </ul>

         
          <ul class="list-group my-3">
            <li class="list-group-item list-group-item-secondary">
                
                <div class="row">
           <h3>Italian</h3>
            </div>
        </li>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            
          </ul>

          
          <ul class="list-group my-3">
            <li class="list-group-item list-group-item-secondary">
                
                <div class="row">
           <h3>Mexician Menu</h3>
            </div>
        </li>
            
           
        <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
             
          </ul>
        </div>

        <div class=" col-6 col-md-4">
           
                    <form action="index.php" class="form-inline my-2 my-lg-0 ">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
                        <FontAwesomeIcon
                 
                  
                  icon={faSearch}
                />
                          <i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                
                    <h6 class="mt-5">Most related Items</h6>
                    <ul class="list-group my-2">
                      
                      <Items/>
                      <Items/>
                      <Items/>
                      
                      
                    </ul>
        </div>
      </div>
    </div>
        <Footer />
      </div>
    );
  }
}
