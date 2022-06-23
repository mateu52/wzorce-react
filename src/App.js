// import './App.css';
// import React from 'react';
// import WindowSize from './WindowSize';
 //import Hello from './Hello';
 //import Users from './Users';
 //import WindowResize from './WindowResize'

// const theme = {
//   color:"blue"
// }
// const MyContext = React.createContext();

// function Split({props}){
//   return(
//     <MyContext.Consumer>
//       {value=>(
//         <div>
//         <h2 style={{color: value.color}}>Witam</h2>
//       </div>
//       )}
      
//     </MyContext.Consumer>
//   )
// }
// function FancyBorder({ props }) {
//   return (
//     <div className="clr">
//       <Split />
//       <Split />
//     </div>
//   );
// }

function App() {
  return (
      //   {/* <Hello name="Mateusz" /> */}
      <div className="App">
        <WindowSize />
        {/* <WindowResize /> */}
        {/* <Users /> */}
      </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <MyContext.Provider value={theme}>
//         <FancyBorder />
//       </MyContext.Provider>
      
//       <h1>Hello CodeSandbox</h1>
//     </div>
//   );
// }

// export default App;
