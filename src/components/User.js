import React from "react";
import PropTypes from "prop-types"

function User(props) {
    return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card-medium">  
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <p>Name: {props.first_name}</p>
                  <p>Surname: {props.last_name}</p>
                  <p>Email: {props.email}</p>         
                  <p>Avatar: <img src={props.avatar} alt="Avatar" /></p>
                </div>
            </div>
          </div>
        </div>
      </div>  
    );
}
User.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default User;