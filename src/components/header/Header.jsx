// Importation
import React, { useState } from "react"; 
import "./header.css";

const Header = () => {
  // Define state variable using useState hook to manage the state of 'Mobile' for mobile view
  const [Mobile, setMobile] = useState(false);

  // Return the Header layout component
  return (
    <>
      <header> {/* Header section */}
        <div className='container flexSB'> 
          <nav className='flexSB'> {/* Navigation bar */}
            <div className='logo'> {/* Logo */}
              <img src='./images/logo.png' alt='' />
            </div>
            {/* Conditional rendering for navigation menu based on 'Mobile' state */}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}> 
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Series</a></li> 
              <li><a href='/'>Movies</a></li>
              <li><a href='/'>Pages</a></li> 
              <li><a href='/'>Pricing</a></li> 
              <li><a href='/'>Contact</a></li> 
            </ul>
            {/* Button for toggling mobile menu */}
            <button className='toggle' onClick={() => setMobile(!Mobile)}> 
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          {/* Account section with search, bell, user icons and subscribe button */}
          <div className='account flexSB'> 
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i> 
            <i className='fas fa-user'></i> 
            <button>Subscribe Now</button> 
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

