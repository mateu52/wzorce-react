import React from "react";

function User({data}) {
    return(
        <div>
            {data.first} {data.last}
        </div>
    );
}

export default User;