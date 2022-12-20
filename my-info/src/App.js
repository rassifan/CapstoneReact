import React from 'react'
import ReactDOM from 'react-dom'
import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
import Social from './components/Social';


function App() {
  return (
    <div>
      <Info/>
      <About/>
      <Interests/>
      <Social/>
    </div>
  );
}

export default App;
