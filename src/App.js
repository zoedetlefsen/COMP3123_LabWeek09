import logo from './logo.svg';
import './App.css';
import College from "./College"
import User from "./MyInfo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="shadow-css">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{color:'black'}}>
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <User studentId="101176144" firstName="Zoe" lastName="Detlefsen"/>
        <College name="George Brown College, Toronto"/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
