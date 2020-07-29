import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Header from "./Haeder";
import Card from "./Card";

import LSB from "./Left_Side_Bar";
import RSB from "./Right_Side_Bar";
import Footer from "./Footer";
import "./App.css";

export function Star() {
  return (
    <FontAwesomeIcon
      className="mr-1"
      style={{ color: "rgb(253, 172, 67)" }}
      icon={faStar}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="offset-lg-1 col-sm-12 col-lg-7">
            <Card />

            <div>
              <button
                type="button"
                className="btn btn-light bg-white border px-3"
              >
                Reviews
              </button>
            </div>
            <ul className="list-group my-3">
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
              <LSB
                img="PAR"
                title="Param Zaidi"
                date="5/06/2020"
                time="5:00pm"
              />
            </ul>
          </div>
          <div className="  col-sm-12 col-lg-4">
            <h6 className="mt-5">Most related Items</h6>
            <ul className="list-group my-2">
              <RSB />
              <RSB />
              <RSB />
              <RSB />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
