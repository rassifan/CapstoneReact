import Navbar from "./components/Navbar";
import Visits from "./components/Visits";
import React from 'react';
import data from './data'

function App() {
  const list = data.map((place) =>{
    return <Visits
    place = {place}
    />
  })
  return (
    <div>
      <Navbar/>
      <section className='visit-list'>
        {list}
      </section>
    </div>

  );
}


export default App;
