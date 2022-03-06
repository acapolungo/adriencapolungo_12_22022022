import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import ActTooltip from './ActTooltip';
import LegendAct from './LegendAct';

/**
* Component that build the user's Board activites
* @param { number } data.userId
* @param { array } data.sessions
* @return { ActivitiesChart }
*/
export default function ActivitiesChart({ data }) {

    const [activities, setActivities] = useState({})

    useEffect(() => {
        setActivities(data)
    }, [data]);

    //console.log(activities)

    const dayArray = ["1", "2", "3", "4", "5", "6", "7"];
    const sessions = activities?.sessions;
    sessions?.map(el => el.day = dayArray)

    return (
        <article className="activities">
            <h2 className="activities__title">Activité quotidienne</h2>
            {/** https://recharts.org/en-US/api/ResponsiveContainer */}
            <ResponsiveContainer width="100%" height="100%">
                {/** https://recharts.org/en-US/api/BarChart */}
                <BarChart
                    data={sessions}
                    margin={{ top: 100, right: 0, left: 20, bottom: 20, }}
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
                        yAxisId="kg"
                        orientation="right"
                        interval="number"
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        hide={false}
                        tick={{ fontSize: 14 }}
                        tickCount={3}
                        domain={['auto', 'dataMax']}
                    />
                    <YAxis
                        yAxisId="cal"
                        hide={true}
                        domain={['auto', 'dataMax']}
                    />
                    {/** https://recharts.org/en-US/api/Tooltip */}
                    <Tooltip
                        cursor={{ fill: "#c4c4c4" }}
                        content={<ActTooltip />}
                    />
                    {/** https://recharts.org/en-US/api/Legend */}
                    <Legend
                        content={<LegendAct />}
                    />
                    {/** https://recharts.org/en-US/api/Bar */}
                    <Bar
                        yAxisId="kg"
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
    )
}

ActivitiesChart.propTypes = {
    /**
    * user activities Data
    */
    data: PropTypes.shape({
        userId: PropTypes.number,
        sessions : PropTypes.array 
    })
};

