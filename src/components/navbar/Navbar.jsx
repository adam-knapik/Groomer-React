import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItems } from './../MenuItems'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './../../assets/logo.png' 
import './navbar.css'

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <NavLink to='/' className='nav-logo'>
        <img src={Logo} alt="Logo" />
        Groomer
      </NavLink>

      <div className={ isMobile ? 'nav-links active' : 'nav-links' }>
        {
          MenuItems.map((item, index) => {
            return (
              <NavLink 
                key={index} 
                to ={item.url} 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} 
                onClick={() => setIsMobile(false)}
              >
                {item.title}
              </NavLink>
            )
          })
        }
        </div>
        <button className='nav-mobile' 
        onClick={() => setIsMobile(!isMobile)}
        >
          { isMobile ? (
            <FaTimes className='nav-mobile-icon'/>
            ): (
            <FaBars className='nav-mobile-icon' />
          )}
        </button>
    </nav>
  )
}

export default Navbar