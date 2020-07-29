import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import dish from "./Dish.png";
import feedback from "./feedback.png";

import "./All_Restaurants.css";
import Haeder from "../../Haeder";
import Footer from "../../Footer";

function Ratings() {
  return (
    <div className="media border my-2">
      <img src={dish} className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0" style={{ color: "#ED1B24" }}>
          Alaska Restaurant
        </h5>
        <p className="text-muted" style={{ fontSize: "smaller" }}>
          Street California
        </p>
        <p className="text-muted" style={{ fontSize: "smaller" }}>
          Best Ratings
        </p>
        <p>
          <FontAwesomeIcon
            className="mr-1"
            style={{ color: "rgb(253, 172, 67)" }}
            icon={faStar}
          />
          <b>Deliver within 30 mins </b>>
        </p>
      </div>
    </div>
  );
}

function Feedback() {
  return (
    <div className="card text-center">
      <div className="text-center">
        <img
          src={feedback}
          className="card-img-top w-50 h-50 rounded-circle float left "
          alt=""
        />
      </div>
      <div className="card-body">
        <p className="card-text">
          <span style={{ color: "red", fontSize: "x-large" }}>"</span> Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          delectus itaque animi maxime accusantium iure. Corporis illo
          perspiciatis expedita placeat ullam, quod itaque vero rem magni quia
          eos sequi tempore?{" "}
          <span style={{ color: "red", fontSize: "x-large" }}>"</span>{" "}
        </p>
      </div>
    </div>
  );
}

function Categories(props) {
  return (
    <li className="list-group-item">
      <div className="form-check border-bottom">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id={props.label}
          value="option1"
          checked
        />
        <label className="form-check-label" for={props.label}>
          {props.label}
        </label>
      </div>
    </li>
  );
}

export default class All_Restaurants extends Component {
  render() {
    return (
      <div>
        <Haeder />

        <div className="text-white bgImage"></div>

        <div
          className="container"
          style={{
            marginTop: "-5rem;",
          }}
        >
          <div className="row">
            <div className="offset-md-1 col-8 col-md-6">
              <div className="d-flex justify-content-around mb-5">
                <div className="p-2">
                  <b>Sorted by: </b>
                </div>
                <div className="p-2">
                  <Link
                    to="All_Restaurants"
                    className="text-decoration-none text-dark "
                    aria-pressed="true"
                  >
                    {" "}
                    <b>Recommendation</b>
                  </Link>
                </div>
                <div className="p-2">
                  <Link
                    to="All_Restaurants"
                    className="text-decoration-none text-dark"
                    aria-pressed="true"
                  >
                    Ratings
                  </Link>
                </div>
                <div className="p-2">
                  <Link
                    to="All_Restaurants"
                    className="text-decoration-none text-dark"
                    aria-pressed="true"
                  >
                    A-Z
                  </Link>
                </div>
                <div className="p-2">
                  <Link
                    to="All_Restaurants"
                    className="text-decoration-none text-dark"
                    aria-pressed="true"
                  >
                    Min order Amount
                  </Link>
                </div>
              </div>

              <Link
                to="All_Restaurants"
                className="text-decoration-none text-secondary"
              >
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
              </Link>
            </div>

            <div className=" col-6 col-md-4">
              <Feedback />

              <h2 className="my-3">Categories</h2>

              <form action="">
                <ul className="list-group">
                  <Categories label="Italian" />
                  <Categories label="Continents" />
                  <Categories label="Asian" />
                  <Categories label="Chinese" />
                  <Categories label="Arabic" />
                  <Categories label="Fast Food" />
                  <Categories label="Mexican" />
                  <Categories label="Desert" />
                </ul>
              </form>
              <div className="container">
                <form>
                  <div className="form-group row my-5">
                    <div className="col-10  px-0 ">
                      <input
                        type="email"
                        className="form-control border-left-0 border-right-0 border-top-0"
                        name="inputName"
                        id="inputName"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="col-2  px-1">
                      <button type="submit" className="btn btn-primary">
                        <FontAwesomeIcon className="mr-1" icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
