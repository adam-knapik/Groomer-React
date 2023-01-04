import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

function error() {
  return (
    <section>
        <h2>Error 404</h2>
        <p>Strona nie została znaleziona</p>
        <Link to='/'>Powrót na stronę główna</Link>
    </section>
  )
}

export default error