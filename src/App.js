import React, { useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './routes/main-pages/Home';
import TrackOrder from './routes/main-pages/TrackOrder';
import Request from './routes/main-pages/Request';
import About from './routes/main-pages/About';
import Services from './routes/main-pages/Services';
import Contact from './routes/main-pages/Contact';
import Tracker from './routes/main-pages/Tracker';
import "./leafLetFix";
import { ToastContainer } from 'react-toastify';
import Loader from './Loader';
import ScrollToTop from './ScrollToTop';
import CookieConsent from './CookieConsent';

function App() {


  const [loading, setloading] = useState(true)

  useEffect(()=>{
    
    const handleLoad =()=>{
      setloading(false)
    }

    if(document.readyState === "complete"){
        setloading(false)
    }else{
      window.addEventListener('load', handleLoad)
    }

    return()=>{
      window.removeEventListener('load', handleLoad)
    }
  },[loading])

  
  if(loading){
    return <Loader/>
  }

  return (
    <div className='App'>
    <CookieConsent />
      <ToastContainer style={{zIndex:9999999}} />
      <HashRouter>
        <ScrollToTop setloading={setloading}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/track-order' element={<TrackOrder />} />
          <Route path='/request-quote' element={<Request />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/track-number/:id' element={<Tracker />} />
        </Routes>
      </HashRouter>
    </div>
  )
} 
 
export default App
