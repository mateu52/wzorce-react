import React, { useState, useEffect, Component } from "react";
import useWindowSize from "./useWindowSize";

function WindowSize() {
  const { width, height } = useWindowSize();
  return (
    <h2>
      Window size: {width} x {height}
    </h2>
  );
}
// import React from "react";

// import useWindowSize from "./useWindowSize";

// function WindowSize(){
//     const [ width, height ] = useWindowSize();

//     return(
//         <h2>
//             size: {width} x {height}
//         </h2>
//     )
// }

export default WindowSize;