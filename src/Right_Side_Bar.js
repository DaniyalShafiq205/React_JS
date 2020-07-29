import React, { Component } from "react";
import Burger from "./ItemDetail/MgBurger.png"
export default class Right_Side_Bar extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div className="media">
              <img src={Burger} className="mr-3" alt="mighty burger" />
              <div className="media-body">
                <h5 className="mt-0" style={{ color: "rgb(240, 14, 14)" }}>Big Mighty Burger</h5>
                <small className="text-muted ">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                </small>
              </div>
            </div>
          </div>
          <div className="col-2 text-center">
            <div>
              <p>
                <i>$20</i>
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
