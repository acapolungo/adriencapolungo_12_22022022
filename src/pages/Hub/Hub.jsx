import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

// importData
import { getUserData } from '../../query';

export default function Hub() {

  const [user, setUser] = useState([])
  const param = useParams();

  console.log(param)


  useEffect(() => {
    getUserData(param).then(data => setUser(data))
      .catch(err => console.log(err))
  }, [param])

  console.log(user)

  return (
    <div>Hub</div>
  )
}
