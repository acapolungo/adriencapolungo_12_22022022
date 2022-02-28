import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

// importData
import { getPerformanceData } from '../../query';
import { performanceMapper } from '../../mapper/performanceMapper';

/**
* Component that build the user's radar chart.
* @component
*/
export default function PerformanceChart() {

    const [performance, setPerformance] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();

    useEffect(() => {
        getPerformanceData(userId).then(data => {
            setPerformance(performanceMapper(data))
            setIsLoading(true);
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })
    }, [userId]);

    const data = performance?.data;
    //console.log(data)

    const perf = ["Intensité", "Vitesse", "Force", "Endurance", "energie", "cardio"];
    data?.map((el, index) => el.kind = perf[index])

    return (
        isLoading ? (
            <article className="performance">
                {/** https://recharts.org/en-US/api/ResponsiveContainer */}
                <ResponsiveContainer width="100%" height="100%">
                    {/** https://recharts.org/en-US/api/RadarChart */}
                    <RadarChart
                        outerRadius={90}
                        data={data} >
                        {/** https://recharts.org/en-US/api/PolarGrid */}
                        <PolarGrid
                            radialLines={false}
                        />
                        {/** https://recharts.org/en-US/api/PolarAngleAxis */}
                        <PolarAngleAxis
                            dataKey="kind"
                            stroke="#fff"
                            tickLine={false}
                            ticks={false}
                            tick={{ fontSize: 12, fontWeight: 500 }} />
                        {/** https://recharts.org/en-US/api/Radar */}
                        <Radar
                            dataKey="value"
                            stroke="transparent"
                            fill="#e60000"
                            fillOpacity={0.6} />
                        {/** https://recharts.org/en-US/api/Legend */}
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </article>
        ) : ""
    )
}
