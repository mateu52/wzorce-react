import logo from './logo.svg';
import './App.css';

const theme = {
  color:"blue"
}
function Split({props}){
  return(
    <div>
      <h2 style={{color: "green"}}>Witam</h2>
    </div>
  )
}
function FancyBorder({ props }) {
  return (
    <div className="clr">
      <Split />
      <Split />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <FancyBorder />
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}

export default App;
