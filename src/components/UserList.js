import React from "react";
import User from "./User";

function UserList(props) {
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
export default UserList;