import React from 'react'
import { Link } from 'react-router-dom'
import './cookies.css'

function Cookies() {
  return (
    <div className='cookies-message'>
        Pieski lubią smaczeki. <br/>
        W celu świadczenia usług <br/>
        na najwyższym poziomie <br/>
        strona używa <Link to='/regulamin'>ciasteczek</Link>
    </div>
  )
}

export default Cookies