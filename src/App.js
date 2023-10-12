import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import ServiceBox from './components/ServicesOverview';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/media.css'

function App() 
{
  return (
            <>
              <Navbar/>
              <Carousel/>
              <ServiceBox />
            </>
         );
}

export default App;
