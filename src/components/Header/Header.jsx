import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={`${process.env.PUBLIC_URL}/images/Sportsee-logo.png`} alt="Logo" /></Link>
      <nav>
        <a href="/#">Accueil</a>
        <a href="/#">Profil</a>
        <a href="/#">Réglage</a>
        <a href="/#">Communauté</a>
      </nav>
    </header>
  )
}
