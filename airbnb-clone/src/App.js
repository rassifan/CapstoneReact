import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const element = data.map(person =>{
    return <Card 
    img = {person.coverImg} 
    rating = {person.stats.rating} 
    reviewCount = {person.stats.reviewCount} 
    location = {person.location} 
    title = {person.title} 
    price= {person.price}
    openSpots ={person.openSpots}
    />
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {element}
      </section>
    </div>
  );
}

export default App;
