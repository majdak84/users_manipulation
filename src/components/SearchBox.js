import React from "react";
import PropTypes from "prop-types";

const SearchBox = (props) => {
    return (
        <div className ="container">
            <div className="row">
                <section className="col s4 offset-4">
                        <div className="input-field">
                            <input  placeholder="Search for users" 
                            type="text" onChange ={props.handleInput}/>
                        </div>
                </section>
            </div>
        </div>
    );
}
SearchBox.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text'])
}
export default SearchBox;