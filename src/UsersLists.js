import React from "react";
import User from "./User";

function UsersLists({users}) {
    return (
        <div>
            {users && users.map(user => {
                        return(
                        <div>
                            <User data={{ first: user.name.first, last: user.name.last}} />
                        </div>)
                    })}
        </div>
    )
}

export default UsersLists;