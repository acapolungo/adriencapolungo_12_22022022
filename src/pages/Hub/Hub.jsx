import React from 'react'
import { Link } from 'react-router-dom'

export default function Hub() {

  return (
    <section className='hub'>
      <h1 className="hub__title">Hub</h1>
      <div className="hub__link">
        <p>Merci de vous connecter à un des profils ci-dessous</p>
        <ul>
          <li><Link to={`/user/12`} >utilisateur n°12</Link></li>
          <li><Link to={`/user/18`} >utilisateur n°18</Link></li>
        </ul>
      </div>
    </section>
  )
}
