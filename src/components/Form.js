import React, {Component} from 'react';
import PropTypes from "prop-types";

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
        };
        this.state = this.initialState
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState ({
            [name]: value
        });
    }
    onFormSubmit = (event) => {
        //console.log(event)
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange} />
                <button className="main_button" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}
Form.propTypes={
    name:PropTypes.string,
    job:PropTypes.string,
    onChange:PropTypes.func,
    onSubmit: PropTypes.func,
    type: PropTypes.oneOf(['text']),
    placeholder: PropTypes.string,
}
export default Form;