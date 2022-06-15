import React from "react";
import withData from "./withData";


function Hello(props){
    console.log(props);
    return (
        <h1>
            Hi {props.defaultName?props.defaultName: props.name} ! Greating from {props.city}
            <p></p>
            {props.apiData && props.apiData.map(user=> (user))}
        </h1>
    )
}
Hello.defaultProps = {
    name: " ",
    city: "Tychy"
}


export default withData(Hello);