import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import All_Restaurants from './Components/All_Restaurants/All_Restaurants';
import Basket from "./Components/Basket/Basket";
import EmailSent from "./Components/Email_Sent/Email_Sent";
import Save from "./Components/Save/Save";
import Payment from "./Components/Payment/Payment";
import Res_Details from './Components/Restaurant_Details/Restaurant_Details';



export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <switch>
             <Route path="/" exact component={App} />
             <Route path="/All_Restaurants" component={All_Restaurants} />
             <Route path="/Basket" component={Basket} />
             <Route path="/EmailSent" exact component={EmailSent} />
             <Route path="/Save" component={Save} />
             <Route path="/Payment" component={Payment} />
             <Route path="/Res_Details" component={Res_Details} />
             </switch>
          
          </BrowserRouter>
      
        )
    }
}
