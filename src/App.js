import './App.css';
 import React from 'react';
 import Hello from './Hello';
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
    <div className="App">
      <Hello name="Mateusz" />
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
