import React from 'react';
import './App.css';
import Testimonials from './Components/Testimonials';
import data from './data';


const App = () => {

  return(
    <div className='wrapper'>
      <h1>Our Group</h1>
      <div className='underLine'></div>
      <Testimonials data={data} />
    </div>
  );
}

export default App;