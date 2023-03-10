import './App.css';
import { useState } from "react";

function App() {

  const [split, setSplit] = useState()

  const handleClick = () => {

  }

  return (
    <div className="App">
      <h1>Split a Square</h1>
      <div className='square' onClick={handleClick}>{split}</div>
    </div>
  );
}

export default App;
