import React from "react";
import UsersLists from "./UsersLists";
class Users extends React.Component{
    state={
        users: []
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=10')
        .then(response=>response.json())
        .then(data =>this.setState({ users: data.results}));
    }
        render(){
            const {users} = this.state
            return(
                <div>
                    <UsersLists users={users} />
                </div>
            );
        }
    
}

export default Users;