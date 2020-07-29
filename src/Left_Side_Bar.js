import React, { Component } from "react";
import { Star } from "./App";
import PAR from "./ItemDetail/PAR.PNG";

export default class Left_Side_Bar extends Component {
  render() {
    return (
     
        <li className="list-group-item">
          <div className="row">
            <div className="col-12">
              <div className="media">
                <img src={PAR} className="mr-3" alt="mighty burger" />
                <div className="media-body">
                  <h5 className="mt-0 d-inline-block">
                    {this.props.title}
                    <div className="d-inline-block ml-5">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </h5>
                  <div>
                    <p>{this.props.date}</p>
                  </div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis repellat labore ipsum reprehenderit architecto
                    impedit molestiae ab fuga, aliquam, id rerum .
                  </p>
                  <p className="text-muted text-right">{this.props.time}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
     
    );
  }
}
