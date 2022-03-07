import React from 'react'
import { Link } from 'react-router-dom'

export default function Hub() {

  //console.log(process.env.NODE_ENV)

  return (
    <section className="hub">
      <h1 className="hub__title">Hub <span>Sportsee</span></h1>
        <p>Merci de vous connecter à un des profils ci-dessous :</p>
        <ul>
          <li><Link to={`/user/12`} >Utilisateur n°12</Link></li>
          <li><Link to={`/user/18`} >Utilisateur n°18</Link></li>
        </ul>
    </section>
  )
}
