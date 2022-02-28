import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Recharts
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import SessionTooltip from './SessionTooltip';
import SessionShape from './SessionShape';

// importData
import { getSessionData } from '../../query';
import { sessionMapper } from '../../mapper/sessionMapper';

/** 
* Component that build the user's session time chart.
* @component
*/

export default function SessionChart() {

    const [sessions, setSessions] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();

    useEffect(() => {
        getSessionData(userId).then(data => {
            setSessions(sessionMapper(data))
            setIsLoading(true);
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })
    }, [userId]);

    //console.log(sessions)
    const dayArr = ["L", "M", "M", "J", "V", "S", "D"];
    const averageSessions = sessions?.sessions;
    averageSessions?.map(el => el.day = dayArr)

    /** 
    * Data for component format
    * [{name: 'a', value: 12}]
    */
    return (
        isLoading ? (
            <article className="session">
                <h2 className="session__title">Durée moyenne des<br />sessions</h2>
                {/** https://recharts.org/en-US/api/ResponsiveContainer */}
                <ResponsiveContainer width="100%" height="100%">
                    {/** https://recharts.org/en-US/api/LineChart */}
                    <LineChart
                        width={300}
                        height={300}
                        data={averageSessions}
                        margin={{ top: 80, right: 5, bottom: 5, left: 5 }}>
                        <defs>
                            {/** https://github.com/recharts/recharts/issues/407 */}
                            <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
                                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
                                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                            </linearGradient>
                        </defs>
                        {/** https://recharts.org/en-US/api/Line */}
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="url(#lineColor)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                stroke: "rgba(255, 255, 255, 0.25)",
                                r: 5,
                                fill: "#fff"
                            }}
                        />
                        {/** https://recharts.org/en-US/api/Tooltip */}
                        {/* https://recharts.org/en-US/api/Rectangle */}
                        <Tooltip
                            content={<SessionTooltip />}
                            cursor={<SessionShape />}
                        />
                        {/**  https://recharts.org/en-US/api/XAxis */}
                        <XAxis
                            dataKey={"day"}
                            stroke="rgba(255, 255, 255, 0.5)"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                            padding={{ left: 10, right: 10 }}
                        />
                        {/** https://recharts.org/en-US/api/YAxis */}
                        <YAxis
                        dataKey="sessionLength"
                            hide={true}
                            type="number"
                            domain={[-10, 'datamax'+10]}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </article>
        ) : ""
    )
}
