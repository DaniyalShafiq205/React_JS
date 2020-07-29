import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Star} from "./App"
import Burger2x from "./ItemDetail/MgBrger2x.png";



export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0,
    };
  }
  handleClickIncre=()=>{
    
this.setState({value: this.state.value + 1});
    

  }
  
  handleClickDecre=()=>{
    if(this.state.value>0)
    {
      this.setState({value: this.state.value - 1});
    }
  }

    render() {
        return (
           
                <div className="row no-gutters">
        <div className="col-lg-4 col-12 mr-4" >
          <img src={Burger2x} className="img-fluid burger-img" alt="..."  id="burgerpic"/>
        </div>
        <div className="col-md-7 col-12">
          <div className="card-body">
            <h5 className="card-title" id="card-style-text">Big Mighty Burger</h5>
            <p id="star-p-tag">
              5.0
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              
             
             
            </p>
            <p><b><i>$20</i></b></p>
            <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat labore ipsum reprehenderit architecto impedit molestiae ab fuga, aliquam, id rerum nihil recusandae et in aspernatur repudiandae quis cumque, itaque blanditiis consequuntur culpa quisquam ratione laboriosam! Odio, exercitationem accusantium? Neque perspiciatis nemo aliquid velit earum beatae tempore deserunt nesciunt deleniti.</p>
            <button type="button" className="btn btn-outline-secondary" onClick={this.handleClickDecre}>-</button>
<Link to="Basket" type="button" className="btn btn-outline-secondary">{this.state.value}
</Link>
<button type="button" className="btn btn-outline-secondary" onClick={this.handleClickIncre}>+</button>

  
  
  <Link to="" className="ml-5">  
   <img src="../assets/Imgaes/Restaurant_Detail/Alaska Menu.png" alt=""/>
  </Link> 
      


          </div>
        </div>
      </div>
      
            
        )
    }
}
