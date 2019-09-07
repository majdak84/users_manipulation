import React from "react";
import User from "./User";
import PropTypes from 'prop-types';

function UserList (props) { //console.log(props)
    const filteredUsers = props.filteredUsers.map((user,id) =>{
        //console.log(user)
        return <User key={id}
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
        avatar={user.avatar}
        />
    })
    
    return(
        <div className="container">
            {filteredUsers}
        </div>    
    );    
}

UserList.propTypes = {
    filteredUsers: PropTypes.array.isRequired
    
}
export default UserList;