import { useState } from 'react'
import './App.css'
import Navbar from "./layouts/Navbar.jsx";
import Hero from './features/Hero.jsx';
import UrlShortener from './features/UrlShortener.jsx';
import Advance from './features/Advance.jsx';
import Boost from './features/Boost.jsx';
import Footer from './layouts/Footer.jsx';

function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <UrlShortener/>
     <Advance/>
     <Boost/>
     <Footer/>
    </>
  )
}

export default App
