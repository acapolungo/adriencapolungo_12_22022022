import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

// importData
import { getUserData } from '../../query';

// importComponent
import Error404 from '../../components/Error404';
//import Dashboard from '../Dashboard/Dashboard';

export default function Hub() {

  const [user, setUser] = useState([])
  const idParam = useParams();
  console.log(user)

  useEffect(() => {
    getUserData(idParam).then(data => {
      setUser(data)
    }).catch(err => console.log(err))
  }, [idParam])

  // Navigate(`http://localhost:3000/${idParam}`)
  // console.log(parseInt(idParam.userId))
  
  if (parseInt(idParam.userId) !== 12 && parseInt(idParam.userId) !== 18) { return <Error404 error="Cet utilisateur n'existe pas" /> }

  if(user === undefined) { return <Error404 error="il y a eu une erreur lors de l'importation des données" /> }

  //if(user.length < 1) { return <LoadingPage /> }
  //const goToDashboard = () => { return <Dashboard state={user}/>};

  return (
      <div className='hub__link'>
      <h1>Hub</h1>
      <li><Link to={`/user/12`} state={user} >utilisateur n°12</Link></li>
      <li><Link to={`/user/18`} state={user} >utilisateur n°18</Link></li>
    </div>
  )
}
