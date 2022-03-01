import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

// importData
import { getUserData } from '../../query';
import { userMapper } from '../../mapper/userMapper';
import { userKeyDataMapper } from '../../mapper/userKeyDataMapper';

// import Component
import Error404 from '../../components/Error/Error404';
import UserInf from '../../components/User/UserInf';
import BarChart from '../../components/Activities/BarChart';
import LineChart from '../../components/Sessions/LineChart';
import RadarChart from '../../components/Performance/RadarChart';
import RadialBarChart from '../../components/Score/RadialBarChart';
import KeyData from '../../components/Keydata/KeyData';


export default function Dashboard() {

  const [user, setUser] = useState(null)
  const [userKeyData, setUserKeyData] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getUserData(userId).then(data => {
      setUser(userMapper(data))
      setUserKeyData(userKeyDataMapper(data))
    }).catch(err => {
      console.log(err)
      setIsLoading(false);
    })
  }, [userId])

  //console.log(userKeyData)

  if (parseInt(userId) !== 12 && parseInt(userId) !== 18) { return <Error404 error="Cet utilisateur n'existe pas" /> }

  if (user === undefined) { return <Error404 error="il y a eu une erreur lors de l'importation des données" /> }

  return (
    isLoading ? (
      <section className="dashboard">
        <UserInf userName={user?.firstName} />
        <div className="dashboard__graph">
          <div className="dashboard__left">
            <div className="dashboard__top">
              <BarChart />
            </div>
            <div className="dashboard__bottom">
              <LineChart />
              <RadarChart />
              <RadialBarChart />
            </div>
          </div>
          <div className="dashboard__right">
            <KeyData
              count={`${userKeyData?.calorieCount} kCal`}
              name="Calories"
              picture="energy"
            />
            <KeyData
              count={`${userKeyData?.proteinCount} g`}
              name="Proteines"
              picture="chicken"
            />
            <KeyData
              count={`${userKeyData?.carbohydrateCount} g`}
              name="Glucides"
              picture="apple"
            />
            <KeyData
              count={`${userKeyData?.lipidCount} g`}
              name="Lipides"
              picture="cheeseburger"
            />
          </div>
        </div>
      </section>
    ) : (
      <div className="sectionloader">
        <span className="loader loader__circle"></span>
      </div>
    )
  )
}
