import React from 'react';
import { 
   BrowserRouter as Router,
   Routes,
   Route,
   Link
   } from 'react-router-dom';
import Home from './Home';
import './App.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';



function App() {



  return (<div>

    <Router>
      <nav>
        <Link to="/" className='link' >SHOP</Link>
        <Link to="/about" className='link' >About us</Link>
        <Link to="/contact" className='link' >Contact us</Link>
      </nav>

      <Routes>
        <Route path='/' element={ <Home /> } /> 
        <Route path='about' element={ <AboutUs /> } />
        <Route path='contact' element={ <ContactUs /> } />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
