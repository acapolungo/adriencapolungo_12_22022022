import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { useParams } from 'react-router-dom';

// Recharts
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import SessionTooltip from './SessionTooltip';
import SessionCustomizedCursor from '../Sessions/SessionCustomizedCursor';

/**
 * Component that build the user's session time chart.
 * @param { number } data.userId
 * @param { array } data.sessions
 * @return { LineChart }
 */
export default function SessionChart({ data }) {

    const [sessions, setSessions] = useState({})
    const [coor, setCoor] = useState(0)

    useEffect(() => {
        setSessions(data)
    }, [data]);

    //console.log(sessions)

    const dayArr = ["L", "M", "M", "J", "V", "S", "D"];
    const averageSessions = sessions?.sessions;
    averageSessions?.map(el => el.day = dayArr)

    return (
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
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
                            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                    </defs>
                    {/** https://recharts.org/en-US/api/Line */}
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#gradient)"
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
                        content={<SessionTooltip setCoor={setCoor} />}
                        cursor={<SessionCustomizedCursor coor={coor} />}
                    />
                    {/**  https://recharts.org/en-US/api/XAxis */}
                    <XAxis
                        dataKey={"day"}
                        stroke="rgba(255, 255, 255, 0.5)"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        dy={5}
                        padding={{ left: 10, right: 10 }}
                    />
                    {/** https://recharts.org/en-US/api/YAxis */}
                    <YAxis
                        dataKey="sessionLength"
                        hide={true}
                        type="number"
                        domain={[-15, 'datamax' + 15]}
                    />
                </LineChart>
            </ResponsiveContainer>
        </article>
    )
}

SessionChart.propTypes = {
    /**
    * user average session Data
    */
    data: PropTypes.shape({
        userId: PropTypes.number,
        sessions: PropTypes.array
    })
};