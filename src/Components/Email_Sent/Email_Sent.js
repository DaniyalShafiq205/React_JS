import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default class Email_Sent extends Component {
    render() {
        return (
            <div className="container" style={{ height: "100vh" }}>
        <div className="row">
            
          <div
            className="offset-md-4 offset-1 col-10 col-md-5 shadow-lg"
            style={{
              marginTop: "18vh",
              minHeight: "500px",

              borderRadius: "1rem",
            }}
          >
         <Link to=""
                type="button"
                className="close"
                
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
        </Link>
            
            <div className="modal-body text-center mt-5 py-5" style={{height: '40vh', color: 'rgb(199, 52, 26)'}}>
            <FontAwesomeIcon
                  className="mr-1"
                  style={{ color: "rgb(240, 14, 14)",fontSize: '7rem'}}
                  icon={faCheck}
                />
               
                   <p className="mt-5" style={{fontSize: '25px', fontWeight: 'bold'}}>
                       Email send
                   </p>
                </div>
          </div>
        </div>
      </div>
        )
    }
}
