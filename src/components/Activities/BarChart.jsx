import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import ActTooltip from './ActTooltip';
import LegendAct from './LegendAct';

// importData
import { getActivitiesData } from '../../query';
import { activitiesMapper } from '../../mapper/activitiesMapper';

export default function ActivitiesChart() {

    const [activities, setActivities] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();

    useEffect(() => {
        getActivitiesData(userId).then(data => {
            setActivities(activitiesMapper(data))
            setIsLoading(true);
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })
    }, [userId]);

    //console.log(activities)

    const dayArray = ["1", "2", "3", "4", "5", "6", "7"];
    const sessions = activities?.sessions;
    sessions?.map(el => el.day = dayArray)

    let arrayKilo = [];
    let arrayCalories = [];
    let minKilogram = 0;
    let maxKilogram = 0;
    let minCalories = 0;
    let maxCalories = 0;

    // Returns the smallest ans the larget value from the numbers provided to Yaxis domain={[min, max]}.
    if (isLoading) {
        arrayKilo = sessions.map(el => el.kilogram);
        arrayCalories = sessions.map(el => el.calories);
        minKilogram = Math.min(...arrayKilo);
        maxKilogram = Math.max(...arrayKilo);
        minCalories = Math.min(...arrayCalories);
        maxCalories = Math.max(...arrayCalories);
    }

    //if (parseInt(userId) !== 12 && parseInt(userId) !== 18) { return <Error404 error="Cet utilisateur n'existe pas" /> }
    //if (activities === undefined) { return <Error404 error="il y a eu une erreur lors de l'importation des données" /> }

    return (
        isLoading ? (
            <article className="activities">
                <h2 className="activities__title">Activité quotidienne</h2>
                {/** https://recharts.org/en-US/api/ResponsiveContainer */}
                <ResponsiveContainer width="100%" height="100%">
                    {/** https://recharts.org/en-US/api/BarChart */}
                    <BarChart
                        data={sessions}
                        margin={{top: 100,right: 0,left: 20,bottom: 20,}}
                        barGap={10}
                        barSize={10}
                    >
                        {/** https://recharts.org/en-US/api/CartesianGrid */}
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        {/** https://recharts.org/en-US/api/XAxis */}
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tick={{ fontSize: 14 }}
                            dy={15}
                        />
                        {/** https://recharts.org/en-US/api/YAxis */}
                        <YAxis
                            yAxisId="kilo"
                            orientation="right"
                            interval="number"
                            allowDecimals={false}
                            tickLine={false}
                            axisLine={false}
                            hide={false}
                            tick={{ fontSize: 14 }}
                            domain={[minKilogram -2, maxKilogram +2]}
                        />
                        <YAxis
                            yAxisId="cal"
                            hide={true}
                            domain={[minCalories -20, maxCalories +20]}
                        />
                        {/** https://recharts.org/en-US/api/Tooltip */}
                        <Tooltip
                            cursor={{fill: "#c4c4c4" }}
                            content={<ActTooltip />}
                            //position={{y: 100 }}
                        />
                        {/** https://recharts.org/en-US/api/Legend */}
                        <Legend
                            content={<LegendAct />}
                        />
                        {/** https://recharts.org/en-US/api/Bar */}
                        <Bar
                            yAxisId="kilo"
                            dataKey="kilogram"
                            radius={[50, 50, 0, 0]}
                            fill="#000000"
                        />
                        <Bar
                            yAxisId="cal"
                            dataKey="calories"
                            fill="#e60000"
                            radius={[50, 50, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </article>
        ) : ""
    )
}


