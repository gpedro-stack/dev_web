import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './routes/Footer';
import MovieSearcher from './routes/MovieSearcher';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
 

  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );

}

export default App
