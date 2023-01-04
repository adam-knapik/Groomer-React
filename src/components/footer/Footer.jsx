import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './../MenuItems'
import { SocialItems } from './../SocialItems'
import './footer.css'

function Footer() {
  return (
    <footer>
      <Link to='/' className='footer-logo'>Groomer</Link>

      <div className='footer-permalinks'>
        { 
          MenuItems.map((item, index) => {
            return (
              <Link key={index} to={item.url}>{item.title}</Link>
            )
          })
        }
      </div>

      <div className='footer-socials'>
        {
          SocialItems.map((item, index) => {
            return (
              <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>{item.icon}</a>
            )
          })

        }

      </div>
    </footer>
  )
}

export default Footer