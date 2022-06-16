import React from "react";

class Users extends React.Component{
    state={
        users: []
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=10')
        .then(response=>response.json())
        .then(data.this.setState({ users: data.results}))
        render(){
            const {users} = this.state
            return(
                <div>
                    {users && users.map(user => {
                        <div>
                            {user.name.first} {user.name.first}
                        </div>
                    })}
                </div>
            )
        }
    }
}

export default Users;